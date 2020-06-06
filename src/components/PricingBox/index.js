import React from 'react'

import Button from 'components/Button'
import { event } from 'utils/ga'

import * as S from './styles'

const onClick = () => event('click', 'cta', 'pricing box button')

const PricingBox = () => (
  <S.Box>
    <S.Ribbon>50% desconto</S.Ribbon>
    <S.Prices>
      <S.FullPrice>R$ 579</S.FullPrice>
      <S.DiscountPrice>R$ 279</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem>
        Acesso aos <strong>6 módulos</strong> assim que lançados
      </S.BenefitsItem>

      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Lives exclusivas</strong> durante o curso
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button href="#" onClick={onClick} withPrice>
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$579</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$279</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
