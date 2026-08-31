import React from 'react'
import { PlNav } from '../_components/PlNav'
import '../pl-landing.css'

export default function PlNicheLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PlNav />
      {children}
    </>
  )
}
