let main= document.getElementById("main")
let home= main.innerHTML

function botonfa () {
    main.innerHTML=`<ul>Formación Académica

    <li>Profesor de Ciencias Sociaeles con orientación a Historia. Instituto del profesorado Dr. Antonio Sobral </li>
    <li>Primera etapa del curso #Séprogramar. INTI </li>
    <li>Curso de Inglés avanzado.Red 21.com</li>
</ul>
    <button onclick="volver()">Home</button>
`
}

function volver() {
    main.innerHTML = home
}
function botonha () {
    main.innerHTML=`
    <ul>
    <li>Comunicación </li><br>
    <li>Resolución de conflictos </li><br>
    <li>Organización </li><br>
    <li>Comunicación oral y escrita </li><br>
    <li>Empatía </li><br>
    <li>Pensamiento crítico </li><br>
    <li>Ética </li><br>
    <li>Responsabilidad </li><br>
    <li>Escucha activa </li><br>
    <li>Actitud positiva </li><br>
    <li>Tolerancia a la presión </li><br>
    <li>Innovación</li><br>
    <li>Iniciativa </li><br>
    <li>Relaciones interpersonales </li><br>
    </ul>
    <button onclick="volver()">Home</button>
`
}
function botonexp () {
    main.innerHTML=`   <ul> Mis trabajos
    <li>Instituto La Inmaculada. Profesor de Historia</li>
    <li>IPEM 16. Profesor de Sociologia</li>
    
    <button onclick="volver()">Home</button>
`
}