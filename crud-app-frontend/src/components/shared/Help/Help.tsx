import { IconButton, Input, Text } from "@chakra-ui/react"

import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "../../../components/ui/popover"
import style from './Help.module.css'
import { PiChatCircleDotsFill } from "react-icons/pi"

export function Help() {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <IconButton className={style.button} variant={'plain'} colorPalette={'yellow'}>
            <PiChatCircleDotsFill className={style.icon} />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="medium">Precisa de ajuda?</PopoverTitle>
          <Text my="4">
            Digite sua dúvida e nossa equipe irá ajudar você.
          </Text>
          <Input placeholder="Digite aqui.." size="sm" />
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}
