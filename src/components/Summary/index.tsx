import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SwiperSlide, Swiper } from 'swiper/react'

import { SummaryCard } from './SummaryCard'

import 'swiper/css'

type SummaryProps = {
  totalOfIncome: number
  totalOfOutcome: number
}

export const Summary = ({ totalOfIncome, totalOfOutcome }: SummaryProps) => {
  const slidesPerView = useBreakpointValue({
    base: 1.15,
    md: 2.2,
    lg: 3,
  })

  const total = totalOfIncome - totalOfOutcome

  return (
    <Flex
      width="full"
      maxWidth="90rem"
      px={{ base: 4, md: 20, lg: 40 }}
      mt={-16}
      py={4}
      alignSelf="center"
    >
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={32}
        style={{ padding: '16px 0' }}
      >
        <SwiperSlide style={{ display: 'flex', flexGrow: 1 }}>
          <SummaryCard
            icon={<ArrowCircleUp color="green" size={24} />}
            label="Entradas"
            value={totalOfIncome}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SummaryCard
            icon={<ArrowCircleDown color="red" size={24} />}
            label="Saídas"
            value={totalOfOutcome}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SummaryCard
            icon={<CurrencyDollar color="white" size={24} />}
            label="Total"
            value={total}
            isTotalCard
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
