const Álgebra_Lineal_Aplicada_para_Machine_Learning = [
  {
    questionTitle: "Al aplicar una matriz a un vector lo que obtenemos es?",
    options: [
      { answerText: "Un vector transformado linealmente", isCorrect: true },
      { answerText: "Un autoValor transformado linealmente", isCorrect: false },
      { answerText: "Un vector transformado por regression", isCorrect: false },
      { answerText: "Un autoValor transformado por regression", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "Una forma simple de visualizar el efecto que la aplicacion de una matriz A de 2x2 tiene es_",
    options: [
      { answerText: "Graficar el circulo unitario y el circulo unitario transformado", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "Al descomponer una matriz no cuadrada A por el metodo SVD obtenemos 3 matrices U, D, V. Donde podemos interpretar a cada matriz como una transforamacion que debe ser aplicada en el siguiente orden:",
    options: [
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "V -> Primera rotacion D -> Escala U -> Segunda rotacion", isCorrect: true },
    ],
  },
  {
    questionTitle: "usar np.linalg.svd  para descomponer una matriz por el metodo SVD nos devuelve 3 objetos U,D ,V ¿que es D?",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "es una matriz diagonal que contiene los valores singulares de la matriz origina", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "Cuando importamos una imagen a una matriz usando np.array(list(imagen.gedata(band=0)), float) obtenemos:",
    options: [
      { answerText: "Un vector con el valor de cada pixel en la imagen", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "Cuando aplicamos la descomposición SVD a una imagen podemos:",
    options: [
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "Visualizar la imagen con menor calidad usando U[:, :1],D[1] y V[1,]", isCorrect: true },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: " Al descomponer por SVD a una matriz que contiene los pixeles de una imagen podemos reducir su tamaño y consecuentemente la definición al:",
    options: [
      { answerText: "Elegir la cantidad de valores singulares que conservaremos.", isCorrect: true },
      { answerText: "Mejorar la calidad de la imagen.", isCorrect: false },
      { answerText: "Aumentar la resolución de la imagen.", isCorrect: false },
      { answerText: "Reducir la claridad de la imagen.", isCorrect: false },
    ],
  },
  {
    questionTitle: "¿Cuál es la pseudoinversa de Moore Penrose de la matriz? [[12] [34] [56]]",
    options: [
      { answerText: "[[0.00884956], [0.01769912], [0.02654867]]", isCorrect: false },
      { answerText: "[[0.02941176, 0.05882353, 0.08823529]]", isCorrect: false },
      { answerText: "[[0.00236967, 0.00671141, 0.01105315]]", isCorrect: false },
      { answerText: "[[-1.33333333 -0.33333333 0.66666667] [1.08333333 0.33333333 -0.41666667]]", isCorrect: true },
    ],
  },
  {
    questionTitle: "Dado el sistema de ecuaciones lineales: y=1*x+4 y=2*x+5 y=-3*x+6 ¿Cuál es la solución usando la pseudoinversa de Moore Penrose?",
    options: [
      { answerText: "[0.57142857, 5]", isCorrect: false },
      { answerText: "array([0.57142857, 5])", isCorrect: false },
      { answerText: "[[0.28571429] [5. ]]", isCorrect: true },
      { answerText: "[[0.28571429], [0.5]]", isCorrect: false },
    ],
  },
  {
    questionTitle: "¿Qué es PCA?",
    options: [
      { answerText: "Un método para reducir dimensiones que rotan los ejes.", isCorrect: true },
      { answerText: "Para convertir los datos en una representación bidimensional.", isCorrect: false },
      { answerText: "Para facilitar la interpretación visual de los datos.", isCorrect: false },
      { answerText: "Para aumentar la varianza de los datos.", isCorrect: false },
    ],
  },

  {
    questionTitle: "Cuando preparamos nuestros datos para aplicar PCA es importante que estén entre [0,1] o [-1,1] y estandarizarlos (por ejemplo dividir todos los elementos por el máximo valor que pueden tomar nuestros datos) porque:",
    options: [
      { answerText: "Para reducir la dimensionalidad de los datos.", isCorrect: false },
      { answerText: "Proyecta los datos originales en las direcciones que maximizan la varianza.", isCorrect: true },
      { answerText: "Para aumentar la varianza de los datos.", isCorrect: false },
      { answerText: "Para mejorar la interpretación de los componentes principales.", isCorrect: false },
    ],
  },
  {
    questionTitle: "Usando el algoritmo PCA de la librería sklearn.decomposition, ¿cómo especifico que quiero conservar el 80% de la varianza contenida en los datos?",
    options: [
      { answerText: "n_components = n_components * 0.80", isCorrect: false },
      { answerText: "n_components = () => 0.80", isCorrect: false },
      { answerText: "n_components(0.80)", isCorrect: false },
      { answerText: "n_components = 0.80", isCorrect: true },
    ],
  },

  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },

  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
  {
    questionTitle: "",
    options: [
      { answerText: "", isCorrect: true },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  },
];
export default Álgebra_Lineal_Aplicada_para_Machine_Learning;
