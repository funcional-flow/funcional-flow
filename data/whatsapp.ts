function converterParaPadraoLink(texto: string): string {
  const link_wpp = "https://wa.me/send?phone=";
  const numero_wpp = "5553991560855";
  // 1. Codifica o texto para o padrão de URL (transforma "!" em "%21" e espaço em "%20")
  const textoCodificado = encodeURIComponent(texto);
  const textoCodificadoFinal = textoCodificado.replace(/%20/g, "+");
  const link_final = link_wpp + numero_wpp + "&text=" + textoCodificadoFinal;
  return link_final;
}

const texto_cta = "Eai treinador! Quero saber mais sobre a metodologia.";
const texto_plano_standard_mensal = "Quero fazer parte do FuncionalFlow!";
const texto_plano_standard_trimestral = "Quero fazer parte do FuncionalFlow!";
const texto_plano_standard_anual = "Quero fazer parte do FuncionalFlow!";
const texto_plano_premium_mensal = "Quero fazer parte do FuncionalFlow!";
const texto_plano_premium_trimestral = "Quero fazer parte do FuncionalFlow!";
const texto_plano_premium_anual = "Quero fazer parte do FuncionalFlow!";

export const link_cta = converterParaPadraoLink(texto_cta);
export const link_plano_standard_mensal = converterParaPadraoLink(texto_plano_standard_mensal);
export const link_plano_standard_trimestral = converterParaPadraoLink(texto_plano_standard_trimestral);
export const link_plano_standard_anual = converterParaPadraoLink(texto_plano_standard_anual);
export const link_plano_premium_mensal = converterParaPadraoLink(texto_plano_premium_mensal);
export const link_plano_premium_trimestral = converterParaPadraoLink(texto_plano_premium_trimestral);
export const link_plano_premium_anual = converterParaPadraoLink(texto_plano_premium_anual);
