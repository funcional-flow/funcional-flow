function converterParaPadraoLink(texto: string): string {
  const link_wpp = "https://wa.me/send?phone=";
  const numero_wpp = "5553991560855";
  // 1. Codifica o texto para o padrão de URL (transforma "!" em "%21" e espaço em "%20")
  const textoCodificado = encodeURIComponent(texto);
  const textoCodificadoFinal = textoCodificado.replace(/%20/g, "+");
  const link_final = link_wpp + numero_wpp + "&text=" + textoCodificadoFinal;
  return link_final;
}

const texto_cta = "Olá, Bruno! Vi a oportunidade de experimentar o Funcional Flow gratuitamente por uma semana. Gostaria de agendar minha consulta e entender como funciona o método.";
const texto_plano_standard_mensal = "Eaí Bruno! Tenho interesse no Plano Standard Mensal do Funcional Flow e gostaria de iniciar meu planejamento de treinos. Pode me explicar os próximos passos?";
const texto_plano_standard_trimestral = "Eaí Bruno! Tenho interesse no Plano Standard Trimestral do Funcional Flow e gostaria de iniciar meu planejamento de treinos. Pode me explicar os próximos passos?";
const texto_plano_standard_semestral = "Eaí Bruno! Tenho interesse no Plano Standard Semestral do Funcional Flow e gostaria de iniciar meu planejamento de treinos. Pode me explicar os próximos passos?";
const texto_plano_premium_mensal = "Eaí Bruno! Tenho interesse no Plano Premium Mensal do Funcional Flow. Gostaria de saber como funciona o acompanhamento e como posso iniciar.";
const texto_plano_premium_trimestral = "Eaí Bruno! Tenho interesse no Plano Premium Trimestral do Funcional Flow. Gostaria de saber como funciona o acompanhamento e como posso iniciar.";
const texto_plano_premium_semestral = "Eaí Bruno! Tenho interesse no Plano Premium Semestral do Funcional Flow. Gostaria de saber como funciona o acompanhamento e como posso iniciar.";

export const link_cta = converterParaPadraoLink(texto_cta);
export const link_plano_standard_mensal = converterParaPadraoLink(texto_plano_standard_mensal);
export const link_plano_standard_trimestral = converterParaPadraoLink(texto_plano_standard_trimestral);
export const link_plano_standard_semestral = converterParaPadraoLink(texto_plano_standard_semestral);
export const link_plano_premium_mensal = converterParaPadraoLink(texto_plano_premium_mensal);
export const link_plano_premium_trimestral = converterParaPadraoLink(texto_plano_premium_trimestral);
export const link_plano_premium_semestral = converterParaPadraoLink(texto_plano_premium_semestral);
