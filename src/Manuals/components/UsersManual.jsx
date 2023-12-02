import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function UsersManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de usuarios'/>}
        </div>
        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de usuarios.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Usuarios" para ingresar al módulo dedicado a la administración de usuarios.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/7534aaee-b48a-41d8-ac00-73ffdcbf039f/2db69260-2ffc-4ffa-97d3-89639fc5611f.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.2459&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a los usuarios, incluyendo una tabla donde se puede ver alguna de la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/3c72d023-b476-4e38-a4b0-8ede8b72f321/7a4a0672-8526-42d0-b2bf-953251e4049c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de usuarios.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de los usuarios, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/d1cfe5a0-dfa7-48b6-9461-b5e02b6a42dc/b5c8a080-84f4-419e-a3d7-c722a9e354ce.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2313&fp-y=0.2562&fp-z=2.1859&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=17&mark-y=199&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDI1Jmg9NzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de usuarios.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de usuarios registrados en el sistema.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/ec52bda7-8a8f-42cf-919a-67af65b3a20e/13fd7927-56d0-427d-8f9a-684ddaed98ae.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0450&fp-y=0.2237&fp-z=2.6867&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=29&mark-y=328&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMzMmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/784d2864-8766-45f3-8a0f-ebd3d0a4aa4b/95dcbc0b-b33d-43b7-b737-ab3cf64928ce.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8333&fp-y=0.2725&fp-z=3.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1074&mark-y=224&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NCZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de usuarios según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, los usuarios activos, los usuarios inactivos o ambos.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/beebbceb-6bff-4de2-a468-a6c0e355bfc6/aa5c4b41-b9ed-4c20-937a-dc87e5fddf83.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8483&fp-y=0.2730&fp-z=3.5819&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=510&mark-y=170&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MTQmaD0yMjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de un usuario.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para agregar un nuevo usuario al sistema, el cual se denomina "Agregar". Si el usuario desea registrar un nuevo usuario debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/2aa1c422-fd56-408c-b910-43780deec0c1/2259a557-56d2-4d31-b74d-7c9468d834cd.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8156&fp-y=0.2228&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=958&mark-y=217&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDgmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar un usuario. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. </p>
            <p className={styles.parr}>El usuario debe ingresar la información en los campos y una vez terminado esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar el usuario.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/2a748018-8761-4c4d-9a49-5d3a3063ca8c/65f346fb-d83a-44d8-8f89-6e50f50ed281.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=398&mark-y=104&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0zOTgmaD02MzAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez que el usuario registre los datos de manera correcta, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar el rol.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/39e5bf78-0433-43ef-97c1-beaba18cb439/14e3d931-0d83-4c5d-9309-c47226141bec.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.7633&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Si el documento que ingresó se encuentra ya registrado, el sistema arrojará la alerta donde indica que el documento ya está registrado en el sistema y no dejara que se registre.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/3cd6de1c-1a23-4329-8bbc-10c14c647140/ed099bf4-8686-4f42-824d-7920bb59a393.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Si el correo electrónico que ingresó se encuentra ya registrado, el sistema arrojará la alerta donde indica que el documento ya está registrado en el sistema y no dejara que se registre.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/efa92dc4-8f0f-4dc7-a9e3-837fa5448c08/d523c6ee-c2d1-4aa8-b4dc-cc717997eb2a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que el usuario se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/8c83f59a-b025-4aff-a755-16e5072fb671/33a97489-8428-4cf4-90d4-1a5ae24cb086.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, visualizar la información del usuario, editar alguna de la información del usuario, inhabilitar o habilitar el usuario y eliminar el usuario.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/58c284b3-6e6f-4bea-aec3-50a4f6203c55/b0703dd5-e09f-4bdd-b848-8b93213d191d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.6476&fp-y=0.4290&fp-z=1.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=651&mark-y=121&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMjEmaD0zNjEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción visualizar la información del usuario.</h3>
            <p className={styles.parr}>Si el usuario desea visualizar la información de un usuario, se debe seleccionar el botón morado con un icono de un 'ojo' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/83c343e4-48c2-4282-a7eb-2a73690c7b2b/14ef81a5-375a-48bd-9e2c-9fab448e0caf.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7019&fp-y=0.4729&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=552&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos con la información correspondiente del usuario.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/9faa2cbd-50cc-435c-bb1e-2a27b2d4c58d/907a7f34-d33e-45f7-bea6-f3848b09d0aa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.4995&fp-z=1.1925&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=320&mark-y=69&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01NjAmaD01NzEmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción editar la información del usuario.</h3>
            <p className={styles.parr}>Si el usuario desea editar la información de un usuario, se debe seleccionar el botón naranja con un icono de un 'lápiz' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/53246317-87c0-4642-9c8c-c9ab07bae339/fd1e3aba-fc8d-4e26-befe-2ebd1e0f1814.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7294&fp-y=0.4729&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=552&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se pueden editar de un usuario. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe cambiar la información a campos en los que desea actualizar la información.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/1446ed89-15dc-419e-8d20-fec91f47722e/4f3f67f5-20c8-42d9-b493-22c659bd8eaa.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5014&fp-y=0.5024&fp-z=1.2962&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=394&mark-y=135&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDcmaD00MzMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
            <p className={styles.parr}>Seguido de esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de editar la información del usuario.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/9f0885ac-2984-4c39-88ee-c50bd0f29e1f/b246275a-c3c0-4213-84a4-8f0f154ebbb0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6853&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la actualización de la información, el sistema arrojará una alerta de confirmación que indica que el usuario se ha actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/464b4d13-55bf-499a-9994-a13f4049f014/df8b970a-1070-41da-8c73-800904225162.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4970&fp-y=0.1128&fp-z=3.0657&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción inhabilitar o habilitar el usuario.</h3>
            <p className={styles.parr}>Si el usuario desea deshabilitar un usuario, se debe seleccionar el botón café con un icono de equis (x) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/d53520f2-f08a-4145-9441-95583c5eb548/04f1dc74-df8a-4257-af52-48fa197f569d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7572&fp-y=0.4762&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=558&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
            <p className={styles.parr}>Si el usuario desea habilitar un usuario, se debe seleccionar el botón verde con un icono de signo (✔) para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/d68ee46f-f8b2-4e38-896c-ec21b5b8ed62/a89f09b6-93d5-4bf5-bc98-da8ad30da02a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7591&fp-y=0.4751&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=567&mark-y=302&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea "inhabilitar" o "habilitar" el usuario, según lo que se desee hacer, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/9f0f5be6-8595-419b-9232-54d2352437d2/8c094964-7944-4d00-8887-9e3cd1084e6e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4987&fp-y=0.5065&fp-z=2.8529&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=516&mark-y=383&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzMmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de fallo.</h3>
            <p className={styles.parr}>Si el usuario intenta deshabilitar su mismo usuario, no podrá ya que le arrojara una alerta la cual indica que no se puede cambiar su propio estado, por temas de seguridad.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/4c9ed7d6-971b-4ef9-bcff-5f2429f79b74/6ff8807c-3081-4db6-b243-f245be170e8b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4946&fp-y=0.0563&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMjAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la actualización del estado del usuario, el sistema arrojara una alerta la cual indica que el estado ha sido actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/cc22cd2b-f257-4ccd-b682-c2e0dd853ce6/9fc4a9be-3839-4210-94d6-289a7b70ff89.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4946&fp-y=0.0504&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar el usuario.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar un usuario del sistema, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción. Se debe tener en cuenta que esta acción solo se puede ejecutar si el usuario está deshabilitado.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/eae0c6a0-c1b0-4e06-8d30-7a6bf58da9ac/4f027742-5b25-4365-8b08-18541999abe4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7591&fp-y=0.4751&fp-z=2.8886&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=660&mark-y=302&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}/>
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desear eliminar el usuario, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/db024873-7523-405c-8aa5-a6164b5e7885/1c481163-88bc-43a7-974d-bc699180b6ab.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.5471&fp-z=2.8235&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=514&mark-y=300&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D"  className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación del usuario, el sistema arrojara una alerta la cual indica que el usuario ha sido eliminado con éxito.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/4589a095-fedd-4ba1-822e-034f82a347f7/efa05f7a-7f06-414a-8210-f4d59dfde1ee.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4946&fp-y=0.0504&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/5076495f-52c3-4271-9d73-e4c7e2709a12/steps/5e2c850d-fc48-4d2c-9e3f-bd04aecea47a/05d070d6-497d-40c9-ac3e-a15e863b5cf8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7310&fp-y=0.5076&fp-z=2.0488&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=430&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03OTgmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw"  className={styles.img}/>
        </div>

          <br/>
          <div className={`flex items-center text-blue-500 ${styles.subtitles}`}>
            <div>Creado con </div>
            <a href="https://tango.us?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=workflow%20export%20links" className="text-blue-500">
                : Tango.us
            </a>
            </div>
            <br/>
    </div>
  );
}