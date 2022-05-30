import flag from "../img/flag.png";

export const prices = [
  {
    id: 1,
    title: "Plan anual",
    payments: "1 pago",
    flag: flag,
    price: "COP$ 741.000/mes",
    regular: "Precio regular COP$ 870.000",
    saving: "Ahorras COP$ 129.000",
    method: { title: "1 pago de COP$ 8'894.000." },
    warning:
      "*En este valor incluye el pago de la matricula, los recursos digitales y 10 mensualidades.",
  },
  {
    id: 2,
    title: "Plan mensual anticipado",
    payments: "12 pagos",
    flag: flag,
    price: "COP$ 769.000/mes",
    regular: "Precio regular COP$ 870.000",
    saving: "Ahorras COP$ 101.000",
    method: {
      title: "12 pagos distribuidos en:",
      list: [
        "1er pago: Matrícula COP$719.000/hasta el 30 abril.",
        "2do pago: Recursos digitales COP$869.000.",
        "3er a 12vo pago: Mensualidades COP$769.000.",
      ],
    },
    warning: "*Valor a pagar hasta el 5 de cada mes.",
  },
  {
    id: 3,
    title: "Plan mensual",
    payments: "12 pagos",
    flag: flag,
    price: "COP$ 869.000/mes",
    method: {
      title: "12 pagos distribuidos en:",
      list: [
        "1er pago: Matrícula COP$719.000/hasta el 30 abril.",
        "2do pago: Recursos digitales COP$869.000.",
        "3er a 12vo pago: Mensualidades COP$869.000",
      ],
    },
  },
];
