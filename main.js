// 11. Qual plano de celular? Plano A: R$ 55 fixo, até 20 GB. Plano B: R$ 30 com 5 GB, mais R$ 3 por GB extra. Leia quantos GB a pessoa usa por mês e informe o plano mais barato e a economia. Se usar mais de 20 GB, o plano A não serve.

const monthlyUsageGb = Number(prompt("Consumo mensal de internet (GB):"));

const planACost = monthlyUsageGb <= 20 ? 55 : Infinity;

let planBCost = 30;

if (monthlyUsageGb > 5) {
    planBCost += (monthlyUsageGb - 5) * 3;
}

if (planACost < planBCost) {
    console.log("Plano A é mais barato.");
    console.log(`Custo: R$ ${planACost.toFixed(2)}`);
    console.log(`Economia: R$ ${(planBCost - planACost).toFixed(2)}`);
} else if (planBCost < planACost) {
    console.log("Plano B é mais barato.");
    console.log(`Custo: R$ ${planBCost.toFixed(2)}`);

    if (Number.isFinite(planACost)) {
        console.log(`Economia: R$ ${(planACost - planBCost).toFixed(2)}`);
    } else {
        console.log("O Plano A não atende ao consumo informado.");
    }
} else {
    console.log("Os dois planos têm o mesmo preço.");
}