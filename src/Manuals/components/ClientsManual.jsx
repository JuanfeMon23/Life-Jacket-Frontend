import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function ClientsManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de clientes'/>}
        </div>
        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de clientes.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Clientes" para ingresar al módulo dedicado a la administración de clientes.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/6c44a522-a4c4-444e-b11f-ce5c7f11f05b/5b42ece9-606c-430d-a53d-b11c869cf324.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.4648&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a los clientes, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/89c284bb-4d5e-4529-8203-bfda5b815717/f2424c81-b32d-4b95-8745-54ca91581437.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de clientes.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de los clientes, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/80952ad2-1154-4aaf-9faa-e79862c10bd5/fe5d37d8-72de-4957-a20d-141deec78083.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1935&fp-y=0.2512&fp-z=2.5927&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=26&mark-y=179&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDIwJmg9ODUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de clientes.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de clientes registrados en el sistema.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/88840e9d-8d75-4f57-aaf0-0d142384b60b/4decc381-d476-4515-929d-c5b979bd428f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0441&fp-y=0.2237&fp-z=2.7006&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=328&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMjgmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/f71429a4-5cd5-4fe2-9371-6aeff635d655/8a8bb427-25fb-4c3c-8a33-c212184c86ca.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8274&fp-y=0.2768&fp-z=3.0710&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1107&mark-y=211&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NyZoPTU3JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de clientes según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, los clientes activos, los clientes inactivos o ambos.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/11a0e5b8-4dba-487e-98dc-35b7ec48f4a5/1a564b42-79fb-4f69-a1d5-93c56e891730.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8473&fp-y=0.2677&fp-z=3.5819&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=515&mark-y=183&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTQmaD0yMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de un cliente.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para agregar un nuevo cliente al sistema, el cual se denomina "Agregar". Si el usuario desea registrar un nuevo cliente debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/47edba56-04e7-4329-861c-aeb59599973e/f01de3a0-39fe-42ea-8cc7-e1b41ba70149.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8600&fp-y=0.2067&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=875&mark-y=214&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzQmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar un cliente. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar el cliente.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/08310cd0-9a4a-4e75-9a86-16a5dc6b8903/a4260276-baa3-48a0-932b-33f3c6a5f56e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4938&fp-y=0.5000&fp-z=1.7918&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=551&mark-y=609&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjUmaD01OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Si el documento que ingresó se encuentra ya registrado, el sistema arrojará la alerta donde indica que el documento ya está registrado en el sistema y no dejara que se registre.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/6911295f-7447-434a-98cf-8b11ceea76c2/73541330-b1d4-4622-8c1b-535575355538.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que el cliente se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/2c4730f3-5364-4423-9947-c56776080940/f223f89b-9b8c-470f-95f4-0171a1d09663.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información del cliente, editar la información del cliente, inhabilitar o habilitar el cliente y eliminar el cliente.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/9256f719-2a9d-4bc3-8c54-a1507526b529/3e5ee743-3476-4b5b-9c93-8f88e883d78f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6554&fp-y=0.4752&fp-z=1.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=574&mark-y=63&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzUmaD01NTYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información del cliente.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información de un cliente, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/fa844354-e145-499e-84c5-02767a2815e4/a9c2f0ff-1f8e-42a5-9278-d7ee1d9b1764.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6901&fp-y=0.6249&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=478&mark-y=256&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos con la información correspondiente del cliente.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/0f6a0743-ef25-4d9d-86a8-2c6c60c7ae9f/2eb468b8-2852-4ddb-82e3-ccc40f78cd78.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=273&mark-y=137&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02NjQmaD01ODkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción editar la información del cliente.</h3>
            <p className={styles.parr}>Si el usuario desea editar la información de un usuario, se debe seleccionar el botón naranja con un icono de un 'lápiz' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/abbffe24-d4e1-4ff9-ac9a-9f3248842279/5e228802-a4d8-4500-a908-024ee0700954.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7070&fp-y=0.6434&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=546&mark-y=243&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se pueden editar de un cliente. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe cambiar la información a campos en los que desea actualizar la información.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/eeb807b6-4b26-4778-b24b-d11aff994fa9/e5b9acc1-02ab-441a-8338-055784b7a4fe.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5011&fp-y=0.5019&fp-z=1.2939&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=394&mark-y=136&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDcmaD00MzMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
            <p className={styles.parr}>Seguido de esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de editar la información del cliente.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/24b9d051-bdfd-40ff-95ec-b7374a2039cd/01198877-c1bc-4f01-a720-f6491e179753.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4980&fp-y=0.6808&fp-z=2.7904&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=509&mark-y=317&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la actualización de la información, el sistema arrojará una alerta de confirmación que indica que el cliente se ha actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/5a263970-53f9-4ab9-b797-72e3a64a8be3/9cf7dc80-cc9d-45ef-8cc2-8f8a773cac1e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción inhabilitar o habilitar el cliente.</h3>
            <p className={styles.parr}>Si el usuario desea deshabilitar un cliente, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/e13284b4-0487-4598-b62b-8da6959343ef/cdaddd5e-6fcd-41a6-b9cb-efe5f469527c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7248&fp-y=0.6121&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=579&mark-y=307&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D"  className={styles.img}/>
            <p className={styles.parr}>Si el usuario desea habilitar un cliente, se debe seleccionar el botón verde con un icono de signo (✔) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/0e0ae6da-bd01-435e-bb56-d09478017a04/b3a329b8-08a7-4ebe-8ef6-df442a1599d2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7321&fp-y=0.6313&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=556&mark-y=239&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea "inhabilitar" o "habilitar" el cliente, según lo que se desee hacer, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/47943a83-f31e-4485-a413-e1607c9dc9d7/9aec09c6-0222-4b70-b64d-0ea0bc9cad58.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5019&fp-y=0.5000&fp-z=2.8268&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=506&mark-y=394&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la actualización del estado del cliente, el sistema arrojara una alerta la cual indica que el estado ha sido actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/6abfbcbb-2b88-46a8-a711-5b5472763d7c/840a12a6-0da1-417e-ba7c-dc3767da6103.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4873&fp-y=0.1646&fp-z=3.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=281&mark-y=25&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar el cliente.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar un cliente del sistema, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/23dcad5a-bf55-43bd-af33-5c0e1fcad77f/b6fd1f98-ec3e-463c-8681-2d4707213af2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7590&fp-y=0.6209&fp-z=3.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=559&mark-y=267&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
            <p className={styles.parr}>Si el usuario intenta eliminar un cliente el cual tiene compras, ventas o cambios asociados, el sistema le arrojará una alerta la cual indica que no se puede eliminar un cliente con compras, ventas o cambios asociados, por temas de seguridad y conservación de la información.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/53705689-e22f-4f9d-bf56-77331d0325fe/6130205d-17c3-4bc4-8a42-0f1c13e087f4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4951&fp-y=0.1370&fp-z=3.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=252&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yNzgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea eliminar el cliente, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/2a1551d9-3c70-493e-a3d6-15d1580f85cf/eecb0df5-59c7-43ef-946b-c1d800044710.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5185&fp-z=2.8529&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=511&mark-y=359&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación del cliente, el sistema arrojara una alerta la cual indica que el cliente ha sido eliminado con éxito.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/cb44c56d-47e5-4fbc-9777-90661e631b43/e4d5933f-e004-4ca6-ae89-364155ed8fab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4969&fp-y=0.1206&fp-z=3.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=246&mark-y=26&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02ODkmaD0yMDEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/3132ad15-d3fd-4729-aeb6-47a48ef33ec1/steps/f03442cd-eb4b-4b98-b82c-f59393df0f88/f27cece9-b894-445e-a28b-6fcccce70f8c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7453&fp-y=0.5714&fp-z=2.0488&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=395&mark-y=435&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}/>
        </div>

        <br/>
          <div className={`flex items-center text-blue-500 ${styles.subtitles}`}>
            <div>Creado con </div>
            <a href="https://tango.us?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" className="text-blue-500">
                : Tango.us
            </a>
            </div>
        <br />
    </div>
  );
}