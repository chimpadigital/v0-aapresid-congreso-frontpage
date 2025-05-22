import CierreSection from '@/components/02-edicion-33/cierre-section'
import { CodigoAbiertoSection } from '@/components/02-edicion-33/codigo-abierto-section'
import { CongresoContentSection } from '@/components/02-edicion-33/congtreso-content-section'
import { HeroEdicion33 } from '@/components/02-edicion-33/hero-edicion-33'
import SeccionIntro from '@/components/02-edicion-33/seccion-intro'
import { SloganSection } from '@/components/02-edicion-33/slogan-section'
import { StatsSection } from '@/components/02-edicion-33/stats-section'
import React from 'react'

const Edicion33 = () => {
  return (
    <section>
      <HeroEdicion33/>
      <SeccionIntro/>
      <StatsSection/>
      <CongresoContentSection/>
      <SloganSection/>
      <CodigoAbiertoSection/>
      <CierreSection/>
    </section>
  )
}

export default Edicion33