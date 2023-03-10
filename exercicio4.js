// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

const sp = 67.83643;
const rj = 36.67866;
const mg = 29.22988;
const es = 27.16548;
const outros = 19.84953;
const faturaTotal = sp + rj + mg + es + outros;

const rjPtg = (rj / faturaTotal) * 100;
const spPtg = (sp / faturaTotal) * 100;
const mgPtg = (mg / faturaTotal) * 100;
const esPtg = (es / faturaTotal) * 100;
const outrosPtg = (outros / faturaTotal) * 100;
const ptgTotal = rjPtg + spPtg + mgPtg + esPtg + outrosPtg;

