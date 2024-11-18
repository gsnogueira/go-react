package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	firebase "firebase.google.com/go"
	"github.com/gorilla/mux"
	"google.golang.org/api/option"
)

const (
	firebaseConfigFile = "./firebase-config.json"
	firebaseDBURL      = "https://your-firebase-project.firebaseio.com"
)

var (
	ctx context.Context
	app *firebase.App
	_   = app
)

func main() {
	ctx = context.Background()
	opt := option.WithCredentialsFile(firebaseConfigFile)
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		log.Fatalf("Firebase initialization error: %v\n", err)
	}

	_, err = app.DatabaseWithURL(ctx, firebaseDBURL)
	if err != nil {
		log.Fatalf("Firestore initialization error: %v\n", err)
	}

	router := mux.NewRouter()
	router.HandleFunc("/api/products", getProducts).Methods("GET")
	router.HandleFunc("/api/products/{id}", getProduct).Methods("GET")

	port := ":8080"
	router.Use(mux.CORSMethodMiddleware(router))
	router.Use(mux.CORSMethodMiddleware(router))
	router.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
			if r.Method == "OPTIONS" {
				w.WriteHeader(http.StatusOK)
				return
			}
			next.ServeHTTP(w, r)
		})
	})
	fmt.Printf("Server is running on port %s...\n", port)
	log.Fatal(http.ListenAndServe(port, router))
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	type Product struct {
		ID          int     `json:"id"`
		Name        string  `json:"name"`
		Description string  `json:"description"`
		Price       float64 `json:"price"`
		Avaible     int     `json:"avaible"`
		Quantity    int     `json:"quantity"`
		Type        string  `json:"type"`
	}

	products := []Product{
		{ID: 1, Name: "iPhone 16", Description: "Iphone 16 Apple 128gb, Câmera Dupla De 48mp, Tela 6,1 Pol, Preto", Price: 799.99, Avaible: 5, Quantity: 1, Type: "smartphone"},
		{ID: 2, Name: "Apple Watch", Description: "Apple Watch Series 6 44mm, GPS, Bluetooth, Pulseira Esportiva Preta", Price: 399.99, Avaible: 3, Quantity: 1, Type: "smartwatch"},
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(products); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func getProduct(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	type Product struct {
		ID          int     `json:"id"`
		Name        string  `json:"name"`
		Description string  `json:"description"`
		Price       float64 `json:"price"`
		Avaible     int     `json:"avaible"`
		Quantity    int     `json:"quantity"`
		Type        string  `json:"type"`
	}

	products := []Product{
		{ID: 1, Name: "iPhone 16", Description: "Iphone 16 Apple 128gb, Câmera Dupla De 48mp, Tela 6,1 Pol, Preto", Price: 799.99, Avaible: 5, Quantity: 1, Type: "smartphone"},
		{ID: 2, Name: "Apple Watch", Description: "Apple Watch Series 6 44mm, GPS, Bluetooth, Pulseira Esportiva Preta", Price: 399.99, Avaible: 3, Quantity: 1, Type: "smartwatch"},
	}

	for _, product := range products {
		if fmt.Sprintf("%d", product.ID) == id {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			if err := json.NewEncoder(w).Encode(product); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
			}
			return
		}
	}

	http.Error(w, "Product not found", http.StatusNotFound)
}
