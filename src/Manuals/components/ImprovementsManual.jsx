import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function ImprovementsManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de mejoras'/>}
        </div>

        <div>
            <h3 className={styles.subtitles}>Acceso al módulo de mejoras.</h3>
            <p className={styles.parr}>Desde el menú desplegable, selecciona la opción de "Mejoras" para ingresar al módulo dedicado a la administración de las mejoras de los vehículos.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/3fb1236f-135d-4c1b-bb13-7865a9e1a2b7/22fbe3e4-f262-473f-b26b-f983850c9678.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.0968&fp-y=0.5731&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=6&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Vista general del módulo.</h3>
            <p className={styles.parr}>En esta vista, se encontrará toda la información referente a las mejoras de los vehículos, incluyendo una tabla donde se puede la información que se encuentra en el sistema y los botones de las distintas acciones que se pueden realizar en este módulo.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/63e91e28-db32-47c2-a45b-9a0188cf9dc7/2ffe9496-3748-44b3-8959-6501231acda0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Filtrado de mejoras.</h3>
            <p className={styles.parr}>En la parte superior izquierda, se encuentra un buscador que te permite filtrar la información de los registros de las mejoras de los vehículos, el usuario tiene que seleccionar el cuadro de búsqueda y podrá diligenciar lo que desee buscar, la tabla se comportará según las palabras relacionadas a lo que se busca.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/934aa677-64f1-4d02-9fa7-7211e4ffa2a2/b075453b-6854-4743-9dca-b637f5520e1e.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.2293&fp-y=0.2468&fp-z=2.1856&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=22&mark-y=213&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDI1Jmg9NzImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Conteo de mejoras.</h3>
            <p className={styles.parr}>En la parte superior izquierda, debajo del buscador, se puede observar el número total de mejoras registradas en el sistema.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/7cbf398d-36b5-4eee-bc4f-55ffc30b4cc2/c2db6d15-cdfc-46c7-9089-f966b9d5b295.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.1864&fp-y=0.2558&fp-z=2.6904&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=27&mark-y=267&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMzEmaD01MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, justo debajo del botón de agregar, se puede configurar la tabla eligiendo el número de registros que se deseen mostrar por página. Se debe seleccionar la flecha que se encuentra al lado del número, esta desplegará tres opciones. Para seleccionar la opción, debe seleccionar el número que desee para que así la tabla se organice.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/81885b36-bfc4-4f2f-a3f5-644599732b97/6d802f30-b31a-4baf-ac16-c3f0375a15f9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8267&fp-y=0.2562&fp-z=3.0667&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1108&mark-y=256&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NiZoPTU2JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Configuración de filtrado de la tabla.</h3>
            <p className={styles.parr}>En la parte superior derecha, se encuentra un botón denominado "Estado" que facilita el filtrado de mejoras según su estado. Para hacer uso de este, se debe seleccionarlo, a su vez, arrojará una lista (activos, inactivos) en la cual puede seleccionar según lo que desee visualizar en la tabla, las mejoras activas, las mejoras inactivas o ambos.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/f4f1cceb-6d5e-405f-aa43-1516dc22bdd7/17f29249-4b7f-4016-871e-ae8c08aaf935.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8522&fp-y=0.2628&fp-z=3.6297&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=205&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MDEmaD0yMDYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Registro de una mejora.</h3>
            <p className={styles.parr}>Al lado derecho del botón de "Estado", se encuentra el botón para agregar una nueva mejora al sistema, el cual se denomina "Agregar". Si el usuario desea registrar una nueva mejora debe seleccionar este botón para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/c70fb0bd-e58c-433c-97a1-a9835f78cf7f/a46bd6a2-d7a1-4b7f-af93-65b409bbefc5.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8155&fp-y=0.2105&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=958&mark-y=243&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDgmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se requieren para registrar una mejora. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. </p>
            <p className={styles.parr}>Para asociar la mejora a un vehículo, se debe seleccionar la placa del vehículo, en este campo solo se filtrarán los vehículos que se encuentran activos en el sistema.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/41436f7c-f188-4158-a559-0d12692e31c2/7a7aa102-420a-4314-b265-03a060c44b69.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.4393&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=368&mark-y=290&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD0xMjcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez la información ya se encuentre diligenciada, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de registrar la mejora.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/b1f84943-4310-41f6-8770-219406e4e2bd/1a2271a2-ee7d-49f4-8362-de24ea79b7c9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6907&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en el registro, el sistema arrojará una alerta de confirmación que indica que  la mejora se ha registrado con éxito y se visualizará en la tabla de los registros.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/044bd608-de69-4731-af7c-37d66c05b39e/5186808e-5514-4ee2-8869-98c00c0ffa1d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4975&fp-y=0.1135&fp-z=3.0653&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=251&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Estado de las mejoras.</h3>
            <p className={styles.parr}>El estado de las mejoras se comporta según el estado del vehículo, es decir, si el vehículo que está registrado está deshabilitado, las mejoras que se encuentren relacionadas a este también estará inhabilitadas, y si el vehículo está habilitado, las mejoras relacionadas a este también estará habilitadas</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/8fa1bae3-85fb-4de1-ab11-b8902df21130/9acd0339-2dac-4e93-a283-87d051a0c2f7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.7735&fp-y=0.4258&fp-z=2.5742&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=484&mark-y=50&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zOTEmaD01MzMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acciones en la tabla.</h3>
            <p className={styles.parr}>Al final de cada registro en la tabla, se encuentran diferentes acciones que se le pueden aplicar a cada registro, en este caso, editar la información de la mejora y eliminar la mejora.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/181fa6a9-58d0-4f7d-8c0b-edd0517d8587/6599c2ea-1298-427f-b140-e0f8e4efe9e7.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8116&fp-y=0.4136&fp-z=2.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=555&mark-y=40&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yODMmaD02MjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción editar la información de la mejora.</h3>
            <p className={styles.parr}>Si el usuario desea editar la información de una mejora, se debe seleccionar el botón naranja con un icono de un 'lápiz' para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/3efab97b-97cb-4380-ae53-e1c2038e422d/21405246-b6e5-4cd8-a1fa-496be9632cb8.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8134&fp-y=0.4541&fp-z=3.8846&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=603&mark-y=213&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde se encuentran los campos que se pueden editar de una mejora. Cada uno de los campos tienen sus validaciones, los campos que se encuentran con un asterisco de color rojo en el cuadro es porque estos son campos obligatorios y deben contener información. El usuario debe cambiar la información a campos en los que desea actualizar la información.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/9fdb18ff-bf66-4c83-9c69-88f7c9f98b5f/9794dfac-b6d0-4f9c-9309-04144bb30a50.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.5000&fp-z=1.5134&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=362&mark-y=161&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NzYmaD0zODYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Seguido de esto, debe seleccionar el botón azul que el cual se denomina "Confirmar" para que el sistema complete la acción de editar la información de la mejora.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/174304fd-7b14-4265-90a6-d54bec1e7298/86eb8a69-cec9-4276-9775-54667f553b12.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6300&fp-z=2.7921&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=503&mark-y=308&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTUmaD05MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema en la actualización de la información, el sistema arrojará una alerta de confirmación que indica que la mejora se ha actualizado con éxito.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/b9b09e06-91b3-462a-bbe4-552e39c2229d/f25d6f42-c24f-42bc-a16d-e34b13aee3a2.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4966&fp-y=0.1131&fp-z=3.0647&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=254&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Acción eliminar la mejora.</h3>
            <p className={styles.parr}>Si el usuario desea eliminar una mejora del sistema, se debe seleccionar el botón rojo con un icono de basura, para continuar con la acción.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/96b05d72-fde4-4f56-8709-6cfdf4629b86/ca36478f-4057-4f9b-99a5-ac7829737e55.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8179&fp-y=0.5641&fp-z=3.8834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=722&mark-y=295&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMjgmaD0xMjgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
            <p className={styles.parr}>Una vez seleccionado el botón, el sistema presenta una ventana emergente donde indica si desea eliminar la mejora, para ejecutar esto deber seleccionar el botón verde "Aceptar".</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/d1dba45a-1bbe-45b6-9bfb-c29ba1c61f0e/58d27d0f-3113-4c93-a572-f166c9374718.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5074&fp-y=0.4644&fp-z=2.8216&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=487&mark-y=465&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzEmaD0xMDgmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}/>
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Si no ocurre ningún problema con la eliminación de la mejora, el sistema arrojara una alerta la cual indica que la mejora ha sido eliminado con éxito.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/9b5d9ea4-83a4-4774-a333-48e1251a2d52/b60fcf2e-55f4-4502-a4d6-30b2d607808a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4968&fp-y=0.0966&fp-z=3.0647&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=253&mark-y=33&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NzcmaD0xNTMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>

        <div>
            <h3 className={styles.subtitles}>Paginación de registros.</h3>
            <p className={styles.parr}>En la parte inferior derecha de la tabla, se encuentran ubicados dos botones azules denominados "Anterior" y "Siguiente". Estos botones facilitan el desplazamiento entre las páginas de registros. Si solo hay una página, estos botones se encontrarán deshabilitados.</p>
            <img src="https://images.tango.us/workflows/0ab806ac-6844-4d30-a9d9-6d3a8edb091e/steps/75879faf-02a1-4fd6-8612-192396e151b1/02950e9d-6805-4d29-ac67-ea9be1d98779.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.8224&fp-y=0.4883&fp-z=3.0478&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=13&mark-y=551&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMTg3Jmg9ODQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
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