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
	router.HandleFunc("/api/products/create", createProduct).Methods("POST")
	router.HandleFunc("/api/products/update/{id}", updateProduct).Methods("PUT")
	router.HandleFunc("/api/products/delete/{id}", deleteProduct).Methods("DELETE")

	port := ":8080"
	fmt.Printf("Server is running on port %s...\n", port)
	log.Fatal(http.ListenAndServe(port, router))
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	type Product struct {
		ID   int    `json:"id"`
		Name string `json:"name"`
	}

	products := []Product{
		{ID: 1, Name: "iPhone 12"},
		{ID: 2, Name: "iPhone 12 Pro"},
		{ID: 3, Name: "iPhone 13"},
		{ID: 4, Name: "iPhone 13 Pro"},
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(products); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func getProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Get a user")
}

func createProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Create a user")
}

func updateProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Update a user")
}

func deleteProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Delete a user")
}
