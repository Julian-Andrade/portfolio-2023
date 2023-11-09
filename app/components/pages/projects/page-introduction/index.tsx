'use client'

import { Link } from '@/app/components/link'
import { SectionTitle } from '../../home/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-no-repeate flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl font-roboto"
      />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você pode consultar alguns trabalhos desenvolvidos por mim.
          Navegue e explore à vontade pelos projetos.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={18} />
          Voltar para home
        </Link>
      </motion.div>
    </section>
  )
}
