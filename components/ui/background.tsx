"use client"
import { useRecipe, Box } from '@chakra-ui/react'
import React from 'react'

export default function Background() {
  const recipie = useRecipe({ key: "Background" }) as any
  const styles = recipie({ base: true })

  return (
    <Box css={styles}></Box>
  )
}
