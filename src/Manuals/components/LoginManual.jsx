import React from "react";
import { styles } from "../../components/styles";
import { Title } from "../../components/globalComponents/Title";

export function LoginManual() {
  return (
    <div className='content'>
        <div>
            {<Title Title='Manual de inicio de sesión'/>}
        </div>

        <p className={styles.parr}>Todos los usuarios que requieran iniciar sesión, deben estar previamente registrados en el sistema en la base de datos. Para ingresar al sistema se debe acceder a la página de inicio de sesión</p>
        <div>
            <h3 className={styles.subtitles}>Ingreso de datos.</h3>
            <p className={styles.parr}>Como primer paso, el usuario debe comenzar ingresando su dirección de correo electrónico en el campo correspondiente, el cual tiene como título "Correo electrónico".</p>
            <img src="https://images.tango.us/workflows/77a44524-b9e8-47fd-a08e-a61027786b6d/steps/4cf591a9-f4f6-490d-9c48-779796608438/bf59fd4d-990d-47fb-bd1a-12079d0f139b.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4238&fp-y=0.4619&fp-z=2.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=284&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>A continuación, se procede a introducir la contraseña en el campo designado, el cual tiene como título "Contraseña".</p>
            <img src="https://images.tango.us/workflows/77a44524-b9e8-47fd-a08e-a61027786b6d/steps/8e613bea-6166-4397-b05e-ed39b1f912eb/07cb884b-e6f6-4a71-914e-4f3163514a9d.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4408&fp-y=0.5243&fp-z=2.0468&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=260&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD05MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez completados ambos campos, se debe seleccionar la opción "Ingresar".</p>
            <img src="https://images.tango.us/workflows/77a44524-b9e8-47fd-a08e-a61027786b6d/steps/8548eb33-8b09-45b8-b56c-ebe69d0b0c84/185127e3-ff88-4ad5-98fa-5dc7244a7117.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4163&fp-y=0.6025&fp-z=2.5218&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=394&mark-y=365&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yOTImaD03OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Validación de campos.</h3>
            <p className={styles.parr}>En el caso de que alguno de los campos de correo electrónico o contraseña no contengan información, el sistema mostrará una mensaje de validación, indicando la necesidad de completar ambos campos requeridos antes de proceder a ingresar al sistema.</p>
            <img src="https://images.tango.us/workflows/77a44524-b9e8-47fd-a08e-a61027786b6d/steps/769afbee-53a5-42f2-a11f-da0e8959c26b/10561344-72be-4ccc-a600-00bb87ff0b91.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3965&fp-y=0.5531&fp-z=1.6928&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=305&mark-y=187&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01OTEmaD0zMzQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>



        <div>
            <h3 className={styles.subtitles}>Ingreso a recuperar contraseña.</h3>
            <p className={styles.parr}>Si el usuario ha olvidado su contraseña, debe seleccionar la opción "<strong>¿</strong>Olvidaste tu contraseña?" para iniciar el proceso de recuperación.</p>
            <img src="https://images.tango.us/workflows/cf91ad30-64e4-481f-b4b0-99aecca69a64/steps/37ee5798-1d02-41ac-91cf-cb02b76da7b9/0c9f6805-02ca-490e-a9ed-a35da3108a5c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3965&fp-y=0.5785&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=368&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Ingresar correo electrónico.</h3>
            <p className={styles.parr}>Al acceder a la página de recuperación, se encuentra un campo específico para ingresar el correo electrónico asociado a la cuenta.</p>
            <img src="https://images.tango.us/workflows/cf91ad30-64e4-481f-b4b0-99aecca69a64/steps/882eb2c2-4cfe-4d14-9699-186199e386f3/27ea7cd4-e421-4b5b-9d60-391c44b676a3.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.5428&fp-z=2.1691&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTkmaD05NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez completado el campo de correo electrónico, se debe seleccionar la opción "Enviar".</p>
            <img src="https://images.tango.us/workflows/cf91ad30-64e4-481f-b4b0-99aecca69a64/steps/44031ba0-df57-4e7e-aa73-6f260f1d2f2d/7d9db5a7-e3e5-4f00-a87a-6694f0773ade.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6246&fp-z=2.5889&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=309&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD04OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Validación de correo electrónico.</h3>
            <p className={styles.parr}>En el caso que el campo de correo electrónico no contenga información, el sistema mostrará una alerta de validación. También, el sistema realizará validaciones en el campo de correo electrónico para asegurar que la información proporcionada cumpla con los requisitos necesarios.</p>
            <img src="https://images.tango.us/workflows/cf91ad30-64e4-481f-b4b0-99aecca69a64/steps/3f6116c1-3da9-4e8c-b340-dbafeb71f4b8/4f998058-0871-4b65-934a-4c6fdebcf81a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5016&fp-y=0.5608&fp-z=2.2537&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=-77&mark-y=259&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzQ0Jmg9MjUyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
            <p className={styles.parr}>Una vez ingresado el correo electrónico de manera válida y de haber seleccionado el botón de "Enviar". El sistema mostrará una alerta confirmando que la solicitud de recuperación de contraseña ha sido enviada exitosamente al correo electrónico proporcionado. Esta alerta indica al usuario que debe revisar el correo.</p>
            <img src="https://images.tango.us/workflows/cf91ad30-64e4-481f-b4b0-99aecca69a64/steps/876a9e9c-e433-43b5-86a6-89d533af40bf/eb34f55d-969c-4e12-8a4b-20ce798eca4a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4994&fp-y=0.0645&fp-z=2.0471&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=368&mark-y=17&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NjMmaD0xNTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>


        <div>
            <h3 className={styles.subtitles}>Ingreso de nueva contraseña.</h3>
            <p className={styles.parr}>Al hacer clic en el enlace proporcionado, el usuario será redirigido a una página donde debe completar dos campos: uno para ingresar la nueva contraseña y otro para confirmarla.</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/279f1c0d-26ff-4b35-98fe-26c10c651f2a/7bd94d56-6a83-4c57-a9a6-6f7299b71784.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.4919&fp-z=2.1691&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTkmaD05NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>El usuario debe llenar ambos campos con la nueva contraseña deseada, asegurándose de que coincidan para evitar errores en el proceso.</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/10216bbf-5d5d-43a0-8a1e-21e79ad4420c/bd10fd64-fc8a-45a2-ab43-814c96d71b9c.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.5655&fp-z=2.1691&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=306&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTkmaD05NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
            <p className={styles.parr}>Una vez completados ambos campos, se debe seleccionar la opción "Enviar".</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/56a7d777-bd9c-4f77-99f9-b262507fe104/5d49eabb-f926-4173-8be2-e42cc4c02e2a.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.6289&fp-z=2.5889&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=466&mark-y=309&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNjgmaD04OSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Validaciones de contraseñas.</h3>
            <p className={styles.parr}>Si existe algún error en la información ingresada, el sistema realizará diversas validaciones en dichos campos. Esto incluirá la verificación de que ambos campos estén completos, que cumplan con los requisitos de formato y que las contraseñas de ambos campos coincidan.</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/66911db9-549f-429c-a71b-4074ada71036/d765d909-cbfd-45dd-96a0-c69b7f70c860.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.4821&fp-z=2.1691&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=390&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MTkmaD0xNTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Una vez, todo se encuentre correctamente diligenciado y seleccionar el botón "Enviar", el sistema mostrará una alerta indicando que la contraseña ha sido actualizada con éxito.</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/a68049bf-f75c-4ba4-93e5-2582d960ca49/680e1e10-3689-41cc-8a18-9f73656946ac.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.0563&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMjAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Volver al inicio de sesión.</h3>
            <p className={styles.parr}>Después de recibir la confirmación, el usuario puede volver a la página de inicio de sesión. Aquí, puede ingresar su dirección de correo electrónico y la nueva contraseña para acceder al aplicativo con las credenciales actualizadas.</p>
            <img src="https://images.tango.us/workflows/c32769f6-482e-4d90-8235-e58df3864526/steps/19d62d2e-9629-40b1-8141-fb283d7a5847/4e0b4c6c-e306-4d2c-a107-13ab0d4c3dac.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.3064&fp-y=0.3223&fp-z=2.4358&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=438&mark-y=329&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMjMmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
        </div>



        <div>
            <h3 className={styles.subtitles}>Validaciones de los campos.</h3>
            <p className={styles.parr}>Si alguno de los campos de correo electrónico o contraseña no contienen la información de un usuario registrado en el sistema, se mostrará unas alertas de validación, indicando que la información diligencia no coincide con información que se encuentra en la base de datos.</p>
            <img src="https://images.tango.us/workflows/1dc2ae97-3334-4fad-8efb-11c555a01fec/steps/59fe86a1-9d16-4ebb-b2f5-4721320c81e9/457299d7-afcd-4bb9-a4fe-53af0375e4b9.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.0504&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
            <p className={styles.parr}></p>
            <img src="https://images.tango.us/workflows/1dc2ae97-3334-4fad-8efb-11c555a01fec/steps/878a0a6c-dc19-4658-b0ac-81460d884d0a/83b56012-cc21-4737-8d36-511a500c1bc0.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.0504&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Alerta de éxito.</h3>
            <p className={styles.parr}>Cuando el correo electrónico ingresado por el usuario y la contraseña sean correctas, se redireccionará a la página de inicio de sistema, en este caso, el dashboard y el sistema mostrará una alerta de confirmación "Bienvenid@".</p>
            <img src="https://images.tango.us/workflows/1dc2ae97-3334-4fad-8efb-11c555a01fec/steps/eae1c5ba-f0a7-4677-a870-1c9f67a791ef/189f1c88-886d-44d3-bfb6-1326020301e4.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.4997&fp-y=0.0504&fp-z=2.0660&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=372&mark-y=22&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NTYmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D" className={styles.img} />
        </div>


        <div>
            <h3 className={styles.subtitles}>Icono de salida.</h3>
            <img src="https://images.tango.us/workflows/1dc2ae97-3334-4fad-8efb-11c555a01fec/steps/7c1128bf-5bc9-4158-bd9c-486fc18f78a0/f46199f2-2fe4-4299-a17a-e986a78e3449.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9709&fp-y=0.0309&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1052&mark-y=15&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NSZoPTk1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D" className={styles.img}  />
        </div>

        <div>
            <h3 className={styles.subtitles}>Cerrar sesión.</h3>
            <img src="https://images.tango.us/workflows/1dc2ae97-3334-4fad-8efb-11c555a01fec/steps/5bd7d9ac-32c4-41bc-bdf4-bfdaabfb613f/661b9005-a120-41c2-9a99-0e8dea46ddcc.png?fm=png&crop=focalpoint&fit=crop&fp-x=0.9246&fp-y=0.0796&fp-z=2.8853&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=740&mark-y=115&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zOTgmaD05NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw" className={styles.img}  />
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