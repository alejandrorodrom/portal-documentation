"use strict";(self.webpackChunkdividelo_documentation=self.webpackChunkdividelo_documentation||[]).push([[625],{625:(k,b,r)=>{r.r(b),r.d(b,{SimpleAccountModule:()=>w});var _=r(4755),s=r(9744),Z=r(1538),d=r(8853),e=r(3020),u=r(9896),c=r(5581),p=r(1094),m=r(3080),h=r(2225),g=r(3228),A=r(360);let U=(()=>{class n{constructor(){this.scriptModule='\n    \x3c!--\n    Este script deber\xeda ubicarse al final del documento\n    dentro de la etiqueta <body> para no bloquear la carga\n    de la p\xe1gina.\n    --\x3e\n    <script\n      type="module"\n      src="https://web-qa.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">\n    <\/script>\n  ',this.scriptComponent='\n    \x3c!-- Bot\xf3n de apertura de cuenta --\x3e\n    <ibk-account\n      jwt="__JWT__"\n      commerce-id="__COMMERCE_ID__"\n      subscription-key="__SUBSCRIPTION_KEY__">\n    </ibk-account>\n  ',this.scriptCustomEvent="\n    <ibk-account id=\"account-wc\"></ibk-account>\n\n    <script>\n      const element = document.getElementById('account-wc');\n\n      element.addEventListener('accountCreated', event => {\n        // El objeto emitido dentro del detalle del evento\n        console.log(event.detail);\n        // {\n        //   accountCorrelationId: 'correlation-id',\n        //   accountDataSharing: true,\n        //   cci: 'account-cci',\n        //   accountId: 'account-id',\n        // }\n      });\n    <\/script>\n  ",this.scriptCurlCorrelation="\n    curl --location --request POST 'https://apiqa.digital.interbank.pe/applications/v1/correlations/{correlationId}' \\\n    --header 'Content-Type: application/json' \\\n    --header 'Ocp-Apim-Subscription-Key: __SUBSCRIPTION_KEY__' \\\n    --header 'Authorization: Bearer __JWT__'\n  ",this.scriptCorrelationResponse='\n    {\n      "correlation": {\n        "status": "SETTLED | "FAILED",\n        "data": {\n          "account": {\n            "type": "SAVING",\n            "subType": "CUENTA_SIMPLE",\n            "currency": "USD" | "PEN",\n            "customer": {\n              "identityDocument": [\n                {\n                  "type": "DNI",\n                  "number": "__CUSTOMER_DNI__"\n                }\n              ],\n              "id": "__CUSTOMER_ID__"\n            },\n            "id": "__ACCOUNT_ID__"\n          },\n          "validationType": "KBA",\n          "hasDebitCardAssignment": true\n        },\n        "id": "__CORRELATION_ID__"\n      }\n    }\n  ',this.GENERAL_ROUTES=Z.j,this.SIMPLE_ACCOUNT_ROUTES=d.Y}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-introduction"]],decls:86,vars:12,consts:[[1,"bold"],["text","aqu\xed",3,"href"],[3,"code"],[1,"attributes"],["image","assets/icons/gift_icon.svg","title","Recuerda que puedes personalizar mucho m\xe1s","description","En esta secci\xf3n te ofrecemos instrucciones para que cambies los colores y tipograf\xeda de los\n       componentes. Rev\xedsala.",3,"routerLink"],[3,"secondLevel"],["type","request","verb","GET","link","https://apiqa.digital.interbank.pe/applications/v1/correlations/{correlationId}",3,"code"],["type","response","responseType","success","responseCode","200",3,"code"]],template:function(t,a){1&t&&(e.TgZ(0,"app-title"),e._uU(1,"Cuenta simple"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," Integra de una manera sencilla el "),e.TgZ(4,"span",0),e._uU(5,"Web Component"),e.qZA(),e._uU(6," de "),e.TgZ(7,"span",0),e._uU(8,"apertura de cuenta"),e.qZA(),e._uU(9," customizable, as\xed evitar\xe1s todo el desarrollo e integraci\xf3n con el API de Interbank adem\xe1s del formulario y procesos con KBA.\n"),e.qZA(),e.TgZ(10,"app-subtitle"),e._uU(11,"Paso 1: Registro de aplicaci\xf3n"),e.qZA(),e.TgZ(12,"app-paragraph"),e._uU(13," Deber\xe1s seguir los pasos indicados "),e._UZ(14,"app-link",1),e._uU(15,".\n"),e.qZA(),e.TgZ(16,"app-subtitle"),e._uU(17,"Paso 2: Integraci\xf3n Web Component"),e.qZA(),e.TgZ(18,"app-paragraph"),e._uU(19," El script que carga Apertura de Cuenta se encuentra desplegado en un CDN. Es suficiente con importar el script dentro de tu p\xe1gina web y usar el componente como un "),e.TgZ(20,"span",0),e._uU(21,"Custom Element"),e.qZA(),e._uU(22,". Al interactuar con el bot\xf3n el usuario ver\xe1 un "),e.TgZ(23,"span",0),e._uU(24,"popup"),e.qZA(),e._uU(25," o "),e.TgZ(26,"span",0),e._uU(27,"modal"),e.qZA(),e._uU(28," en donde completar\xe1 su proceso de pago.\n"),e.qZA(),e._UZ(29,"app-code-block",2)(30,"app-code-block",2),e.TgZ(31,"div",3)(32,"app-subtitle"),e._uU(33,"Atributos"),e.qZA(),e.TgZ(34,"ol")(35,"app-paragraph")(36,"li")(37,"span",0),e._uU(38,"jwt (obligatorio)"),e.qZA(),e._uU(39,": Token de autenticaci\xf3n generado. "),e.qZA()(),e.TgZ(40,"app-paragraph")(41,"li")(42,"span",0),e._uU(43,"subscription-key (obligatorio)"),e.qZA(),e._uU(44,": Credencial generada por Interbank. "),e.qZA()(),e.TgZ(45,"app-paragraph")(46,"li")(47,"span",0),e._uU(48,"commerce-id (obligatorio)"),e.qZA(),e._uU(49,": Tu identificador de aplicaci\xf3n. "),e.qZA()(),e.TgZ(50,"app-paragraph")(51,"li")(52,"span",0),e._uU(53,"logo-url (opcional)"),e.qZA(),e._uU(54,": URL del logo del comercio (aparecer\xe1 en el popup de simulaci\xf3n). "),e.qZA()()()(),e._UZ(55,"br")(56,"app-banner",4)(57,"br"),e.TgZ(58,"app-subtitle"),e._uU(59,"Paso 3: Notificaci\xf3n de creaci\xf3n de cuenta"),e.qZA(),e.TgZ(60,"app-paragraph"),e._uU(61," Una vez el cliente haya completado el proceso de creaci\xf3n de cuenta el Web Component de Interbank notificar\xe1 a trav\xe9s de un "),e.TgZ(62,"span",0),e._uU(63,"CustomEvent"),e.qZA(),e._uU(64," un identificador con el cual se podr\xe1 consultar al API de Interbank el detalle de la cuenta. Adem\xe1s se emitir\xe1 si el cliente acept\xf3 compartir los datos de sus cuentas de ahorro para asociar al perfil personal (\xfaltimo checkbox) junto con el CCI y el id de la cuenta. "),e.TgZ(65,"span",0),e._uU(66," Es importante verificar este \xfaltimo a trav\xe9s del servicio de correlaci\xf3n explicado en el paso 3.3 "),e.qZA()(),e.TgZ(67,"app-subtitle",5),e._uU(68,"Paso 3.1: Web Component Custom Event"),e.qZA(),e._UZ(69,"app-code-block",2),e.TgZ(70,"app-subtitle",5),e._uU(71,"Paso 3.2: Autenticaci\xf3n"),e.qZA(),e.TgZ(72,"app-paragraph"),e._uU(73," Como se describe "),e._UZ(74,"app-link",1),e._uU(75,".\n"),e.qZA(),e.TgZ(76,"app-subtitle",5),e._uU(77,"Paso 3.3: Consulta detalle de cuenta"),e.qZA(),e.TgZ(78,"app-paragraph"),e._uU(79," Una vez se haya obtenido el Correlation Id en el paso 3.1, bastar\xe1 con consultar al siguiente endpoint para obtener todos los datos relacionados a la cuenta:\n"),e.qZA(),e._UZ(80,"app-http-block",6)(81,"app-http-block",7),e.TgZ(82,"app-paragraph"),e._uU(83," Conoce el flujo de apertura de cuenta a trav\xe9s del WebComponent de Interbank "),e._UZ(84,"app-link",1),e._uU(85,".\n"),e.qZA()),2&t&&(e.xp6(14),e.Q6J("href",a.GENERAL_ROUTES.PARTNER_REGISTRATION),e.xp6(15),e.Q6J("code",a.scriptModule),e.xp6(1),e.Q6J("code",a.scriptComponent),e.xp6(26),e.Q6J("routerLink",a.GENERAL_ROUTES.CONFIGURATION_STYLES),e.xp6(11),e.Q6J("secondLevel",!0),e.xp6(2),e.Q6J("code",a.scriptCustomEvent),e.xp6(1),e.Q6J("secondLevel",!0),e.xp6(4),e.Q6J("href",a.GENERAL_ROUTES.PARTNER_REGISTRATION),e.xp6(2),e.Q6J("secondLevel",!0),e.xp6(4),e.Q6J("code",a.scriptCurlCorrelation),e.xp6(1),e.Q6J("code",a.scriptCorrelationResponse),e.xp6(3),e.Q6J("href",a.SIMPLE_ACCOUNT_ROUTES.FLOW))},dependencies:[s.rH,u.r,c.w,p.H,m.P,h.N,g.S,A.D]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-flow"]],decls:87,vars:0,consts:[[1,"column"],["src","assets/images/account/flow/step1.png","alt","step-one",1,"column__img"],[1,"column__text"],[1,"bold"],["src","assets/images/account/flow/step2.png","alt","step-two",1,"column__img"],["src","assets/images/account/flow/step3.png","alt","step-three",1,"column__img"],["src","assets/images/account/flow/step4.png","alt","step-four",1,"column__img"],["src","assets/images/account/flow/step5.png","alt","step-five",1,"column__img"],["src","assets/images/account/flow/tax.png","alt","tax",1,"column__img"],["src","assets/images/account/flow/card_full.png","alt","card-full",1,"column__img"],["src","assets/images/account/flow/missing_full.png","alt","missing_full",1,"column__img"]],template:function(t,a){1&t&&(e.TgZ(0,"app-title"),e._uU(1,"Flujo"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," El flujo de apertura de cuenta a trav\xe9s del WebComponent de Interbank puede variar entre 3 a 5 pasos, esto depender\xe1 de si la persona que quiere abrir una cuenta es cliente de Interbank o no y adem\xe1s, posee o no una tarjeta d\xe9bito. A continuaci\xf3n se describir\xe1 en detalle cada paso del proceso adem\xe1s de posibles configuraciones adicionales.\n"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"div",0),e._UZ(6,"img",1),e.TgZ(7,"div",2)(8,"app-subtitle"),e._uU(9,"Identificaci\xf3n de cliente"),e.qZA(),e.TgZ(10,"app-paragraph"),e._uU(11," Ser\xe1 el primer paso para la apertura de cuenta, en este paso, el cliente deber\xe1 proporcionar su DNI para determinar si ya es un "),e.TgZ(12,"span",3),e._uU(13,"cliente Interbank"),e.qZA(),e._uU(14," o no. "),e.qZA(),e.TgZ(15,"app-paragraph"),e._uU(16," Una vez el cliente haya ingresado su DNI, el sistema determinar\xe1 si el DNI corresponde a un cliente ya registrado en Interbank, de ser as\xed, el cliente s\xf3lo deber\xe1 proporcionar informaci\xf3n adicional sobre la moneda y otros detalles como impuestos de renta. "),e.qZA(),e.TgZ(17,"app-paragraph"),e._uU(18," Si el sistema determina que el DNI ingresado "),e.TgZ(19,"span",3),e._uU(20,"no corresponde"),e.qZA(),e._uU(21," a un cliente registrado en Interbank, se agregar\xe1 un paso adicional donde se detallar\xe1 informaci\xf3n personal del usuario como pa\xeds de residencia, direcciones, etc. "),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",2)(24,"app-subtitle"),e._uU(25,"Preguntas KBA"),e.qZA(),e.TgZ(26,"app-paragraph"),e._uU(27," Una vez se haya identificado al cliente a trav\xe9s de su DNI, se dar\xe1 paso a la secci\xf3n de preguntas KBA, en donde el cliente deber\xe1 responder una serie de preguntas para validar su identidad. "),e.qZA(),e.TgZ(28,"app-paragraph"),e._uU(29," Si el cliente responde equ\xedvocamente las preguntas, un nuevo conjunto de preguntas ser\xe1 proporcionado para intentar nuevamente, para un total de 3 intentos m\xe1ximos, caso en el que el DNI ser\xe1 bloqueado y no podr\xe1 usarse para abrir una cuenta durante las pr\xf3ximas 24 horas. "),e.qZA()(),e._UZ(30,"img",4),e.qZA(),e.TgZ(31,"div",0),e._UZ(32,"img",5),e.TgZ(33,"div",2)(34,"app-subtitle"),e._uU(35,"Formulario creaci\xf3n de cliente (DNI no registrado en Interbank)"),e.qZA(),e.TgZ(36,"app-paragraph"),e._uU(37," Como se mencion\xf3 anteriormente, para el caso en el que el DNI no corresponde a un cliente Interbank, se a\xf1adir\xe1 un paso adicional en el cual se proporcionar\xe1 informaci\xf3n personal y de contacto. "),e.qZA()()(),e.TgZ(38,"div",0)(39,"div",2)(40,"app-paragraph"),e._uU(41," Este paso consta de dos secciones en su formulario, en la segunda secci\xf3n se proporcionar\xe1 informaci\xf3n sobre la direcci\xf3n de residencia del cliente. "),e.qZA()(),e._UZ(42,"img",6),e.qZA(),e.TgZ(43,"div",0),e._UZ(44,"img",7),e.TgZ(45,"div",2)(46,"app-subtitle"),e._uU(47,"Apertura de cuenta"),e.qZA(),e.TgZ(48,"app-paragraph"),e._uU(49," Este ser\xe1 el paso final, en el cual el cliente escoger\xe1 la moneda de su preferencia para abrir su cuenta Interbank, adem\xe1s, proporcionar\xe1 informaci\xf3n adicional sobre residencia fiscal o tributaria fuera del pa\xeds. "),e.qZA(),e.TgZ(50,"app-paragraph"),e._uU(51," Finalmente, proporcionar\xe1 su acuerdo con los t\xe9rminos y condiciones adem\xe1s de otras pol\xedticas de tratamiento de datos e informaci\xf3n personales. "),e.qZA()()(),e.TgZ(52,"div",0)(53,"div",2)(54,"app-paragraph"),e._uU(55," En caso de que el cliente seleccione la opci\xf3n en la que asegura tener residencia fiscal o tributaria fuera del pa\xeds, se desplegar\xe1n 3 campos adicionales en los cuales se especificar\xe1 el pa\xeds, n\xfamero tributario y un checkbox para especificar si este no es requerido en el pa\xeds seleccionado. "),e.qZA(),e.TgZ(56,"app-paragraph"),e._uU(57," En caso de que el cliente tenga otro pa\xeds o pa\xedses adicionales los cuales especificar, el bot\xf3n "),e.TgZ(58,"span",3),e._uU(59,"A\xf1adir otro pa\xeds"),e.qZA(),e._uU(60," crear\xe1 cuantos campos adicionales se necesiten para agregar la informaci\xf3n necesaria. "),e.qZA()(),e._UZ(61,"img",8),e.qZA(),e.TgZ(62,"div",0),e._UZ(63,"img",9),e.TgZ(64,"div",2)(65,"app-paragraph"),e._uU(66," Si el cliente no tiene asignada una tarjeta de d\xe9bito le ser\xe1 informada la adquisici\xf3n junto con un peque\xf1o switch para determinar si desea que su tarjeta sea activada para compras en l\xednea y en el exterior. "),e.qZA()()(),e.TgZ(67,"div",0)(68,"div",2)(69,"app-paragraph"),e._uU(70," Si el cliente (existente) no cuenta con la informaci\xf3n de correo electr\xf3nico o tel\xe9fono se le pedir\xe1 que la actualice en el \xfaltimo paso. "),e.qZA()(),e._UZ(71,"img",10),e.qZA(),e.TgZ(72,"div",0),e._UZ(73,"img",9),e.TgZ(74,"div",2)(75,"app-subtitle"),e._uU(76,"Creaci\xf3n de cuenta exitosa"),e.qZA(),e.TgZ(77,"app-paragraph"),e._uU(78," En este punto, el cliente ya habr\xe1 creado su cuenta de manera exitosa y es aqu\xed donde se notificar\xe1 al comercio el evento de creaci\xf3n de cuenta. "),e.qZA()()(),e._UZ(79,"br"),e.TgZ(80,"app-subtitle"),e._uU(81,"Correo de notificaci\xf3n de apertura de cuenta"),e.qZA(),e.TgZ(82,"app-paragraph"),e._uU(83," Una vez se hayan completado todos los pasos, el cliente podr\xe1 crear su cuenta, momento en el que recibir\xe1 un "),e.TgZ(84,"span",3),e._uU(85,"correo electr\xf3nico"),e.qZA(),e._uU(86," detallando informaci\xf3n como el n\xfamero de cuenta, c\xf3digo CCI y otros datos adicionales. El correo en menci\xf3n tambi\xe9n contendr\xe1 dos archivos PDF con el detalle m\xe1s espec\xedfico sobre la cuenta creada m\xe1s otro archivo PDF con el Contrato de Dep\xf3sitos en Cuenta Corriente.\n"),e.qZA())},dependencies:[u.r,c.w,p.H]}),n})(),f=(()=>{class n{constructor(){this.scriptBusinessName='\n    <ibk-account\n      business-name="Mi Negocio">\n    </ibk-account>\n  ',this.scriptLogo='\n    <ibk-account\n      logo-url="https://tudominio.pe/assets/logo.png">\n    </ibk-account>\n  ',this.scriptPersonalization='\n    <style>\n      .my-custom-btn {\n        transition: .2s;\n        border: 0;\n        border-radius: 8px;\n        background-color: orange;\n        cursor: pointer;\n        padding: 20px 30px;\n        color: white;\n        font-size: 16px;\n      }\n\n      .my-custom-btn:hover {\n        transform: scale(1.1);\n      }\n    </style>\n\n    <ibk-account custom-btn>\n      <button class="my-custom-btn">\n        \xa1Abre tu cuenta Interbank!\n      </button>\n    </ibk-account>\n  ',this.scriptInline="\n    <ibk-account inline></ibk-account>\n  ",this.scriptAutocomplete="\n    <body>\n      <ibk-account id=\"account-creation-component\"></ibk-account>\n\n      <script>\n        (async () => {\n          await customElements.whenDefined('ibk-account');\n          const elem = document.getElementById('account-creation-component');\n          elem.autocompleteData = {\n            documentNumber: '12345678',\n            residenceCountry: 'PE',\n            birthCountry: 'PE',\n            nationality: 'PE',\n            email: 'user@email.com',\n            phoneNumber: '474836534',\n            streetName: 'Calle San Antonio',\n            streetNumber: '3424',\n            block: 'A',\n            lot: '2',\n            apartment: '502',\n            lockOnAutocomplete: true\n          };\n        })();\n      <\/script>\n    </body>\n  ",this.GENERAL_ROUTES=Z.j,this.SIMPLE_ACCOUNT_ROUTES=d.Y}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-personalization"]],decls:89,vars:8,consts:[[1,"bold"],[3,"code"],[1,"personalization"],["custom-btn",""],[1,"my-custom-btn"],[1,"inline"],["inline",""],["text","configuraci\xf3n de estilo",3,"href"],["text","Sandbox",3,"href"],["image","assets/icons/pcguy_icon.svg","title","Prueba tu integraci\xf3n en nuestro Sandbox","description","Tenemos un sandbox para que pruebes tus credenciales y los componentes Div\xeddelo de una manera sencilla\n   y al instante. Pru\xe9balo.",3,"routerLink"]],template:function(t,a){1&t&&(e.TgZ(0,"app-title"),e._uU(1,"Personalizaci\xf3n"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," \xa1Personalizar el "),e.TgZ(4,"span",0),e._uU(5,"Web Component"),e.qZA(),e._uU(6," de apertura de cuenta es posible! Puedes configurar la paleta de colores o cambiar su comportamiento para que se adapte de la mejor manera a tu p\xe1gina web.\n"),e.qZA(),e.TgZ(7,"app-subtitle"),e._uU(8,"Nombre del socio"),e.qZA(),e.TgZ(9,"app-paragraph"),e._uU(10," En algunas partes del front de apertura de cuenta se har\xe1 referencia a tu negocio, por lo que para conocer tu nombre, deber\xe1s proporcionar el nombre como deseas que aparezca:\n"),e.qZA(),e._UZ(11,"app-code-block",1),e.TgZ(12,"app-subtitle"),e._uU(13,"Logo del socio"),e.qZA(),e.TgZ(14,"app-paragraph"),e._uU(15," Para que aparezca el logo de tu negocio dentro del WebComponent de apertura de cuenta ser\xe1 necesario proporcionar la url donde se encuentra la imagen:\n"),e.qZA(),e._UZ(16,"app-code-block",1),e.TgZ(17,"app-subtitle"),e._uU(18,"Bot\xf3n personalizado"),e.qZA(),e.TgZ(19,"app-paragraph"),e._uU(20," El bot\xf3n que abre el modal puede ser completamente personalizado, para ello se debe usar el atributo "),e.TgZ(21,"span",0),e._uU(22,"custom-btn"),e.qZA(),e._uU(23," y ubicar dentro de la etiqueta lo que se desee que funcione como el bot\xf3n, podr\xeda ser incluso una imagen:\n"),e.qZA(),e._UZ(24,"app-code-block",1),e.TgZ(25,"app-paragraph"),e._uU(26,"Dando como resultado:"),e.qZA(),e.TgZ(27,"div",2)(28,"ibk-account",3)(29,"button",4),e._uU(30,"\xa1Abre tu cuenta Interbank!"),e.qZA()()(),e._UZ(31,"br"),e.TgZ(32,"app-subtitle"),e._uU(33,"Inline"),e.qZA(),e.TgZ(34,"app-paragraph"),e._uU(35," Por defecto, el "),e.TgZ(36,"span",0),e._uU(37,"Web Component"),e.qZA(),e._uU(38," renderizar\xe1 un bot\xf3n que al ser accionado abrir\xe1 un popup o modal con el formulario para el proceso de apertura de cuenta. Este comportamiento se puede configurar usando el atributo "),e.TgZ(39,"span",0),e._uU(40,"inline"),e.qZA(),e._uU(41," dentro de la etiqueta que define al elemento de esta manera:\n"),e.qZA(),e._UZ(42,"app-code-block",1),e.TgZ(43,"app-paragraph"),e._uU(44,"Dando como resultado:"),e.qZA(),e.TgZ(45,"div",5),e._UZ(46,"ibk-account",6),e.qZA(),e.TgZ(47,"app-subtitle"),e._uU(48,"Configuraci\xf3n de estilo"),e.qZA(),e.TgZ(49,"app-paragraph"),e._uU(50," Para configurar los colores o fuentes usados por el componente revisar la secci\xf3n de "),e._UZ(51,"app-link",7),e._uU(52,".\n"),e.qZA(),e.TgZ(53,"app-subtitle"),e._uU(54,"Autocompletado de campos en creaci\xf3n de cliente"),e.qZA(),e.TgZ(55,"app-paragraph"),e._uU(56," Es muy probable que la informaci\xf3n que se solicita en la vista de creaci\xf3n de cliente ya haya sido proporcionada al tratarse de un cliente registrado en tu negocio, por ello, para mejorar la experiencia del cliente, puedes proporcionar esta informaci\xf3n con el fin de que este se autocomplete.\n"),e.qZA(),e.TgZ(57,"app-paragraph"),e._uU(58," Para lograr este objetivo, los datos deber\xe1n ser suministrados dentro de un objeto plano de JavaScript. Dada esta condici\xf3n, no puede ser pasado como un atributo HTML y se deber\xe1 seguir la siguiente l\xf3gica:\n"),e.qZA(),e._UZ(59,"app-code-block",1),e.TgZ(60,"app-paragraph"),e._uU(61," Una vez el custom-element ya est\xe9 definido, se podr\xe1n proporcionar los valores del formulario a trav\xe9s de la llave "),e.TgZ(62,"span",0),e._uU(63,"autocompleteData"),e.qZA(),e._uU(64,". Cabe mencionar que todos estos datos no deben ser proporcionados en su totalidad, todos ellos son opcionales.\n"),e.qZA(),e.TgZ(65,"app-paragraph"),e._uU(66," La llave "),e.TgZ(67,"span",0),e._uU(68,"lockOnAutocomplete"),e.qZA(),e._uU(69," recibir\xe1 un valor de verdadero o falso, si esta se especifica como verdadero, los campos que sean autocompletados ser\xe1n bloqueados para que sean de solo lectura, es decir, no podr\xe1n ser editados por el usuario.\n"),e.qZA(),e.TgZ(70,"app-paragraph"),e._uU(71," Las llaves "),e.TgZ(72,"span",0),e._uU(73,"residenceCountry"),e.qZA(),e._uU(74,", "),e.TgZ(75,"span",0),e._uU(76,"birthCountry"),e.qZA(),e._uU(77," y "),e.TgZ(78,"span",0),e._uU(79,"nationality"),e.qZA(),e._uU(80," deben recibir un valor acorde a la norma "),e.TgZ(81,"span",0),e._uU(82,"ISO 3166-1 alfa-2"),e.qZA(),e._uU(83,".\n"),e.qZA(),e.TgZ(84,"app-paragraph"),e._uU(85," Para ver en acci\xf3n algunas de estas configuraciones ser\xe1 necesario en la secci\xf3n "),e._UZ(86,"app-link",8),e.qZA(),e._UZ(87,"br")(88,"app-banner",9)),2&t&&(e.xp6(11),e.Q6J("code",a.scriptBusinessName),e.xp6(5),e.Q6J("code",a.scriptLogo),e.xp6(8),e.Q6J("code",a.scriptPersonalization),e.xp6(18),e.Q6J("code",a.scriptInline),e.xp6(9),e.Q6J("href",a.GENERAL_ROUTES.CONFIGURATION_STYLES),e.xp6(8),e.Q6J("code",a.scriptAutocomplete),e.xp6(27),e.Q6J("href",a.SIMPLE_ACCOUNT_ROUTES.SANDBOX),e.xp6(2),e.Q6J("routerLink",a.SIMPLE_ACCOUNT_ROUTES.SANDBOX))},dependencies:[s.rH,u.r,c.w,p.H,m.P,h.N,g.S],styles:[".my-custom-btn[_ngcontent-%COMP%] {\n      transition: .2s;\n      border: 0;\n      border-radius: 8px;\n      background-color: orange;\n      cursor: pointer;\n      padding: 20px 30px;\n      color: white;\n      font-size: 16px;\n      font-family: 'Geometria-Regular', monospace;\n    }\n\n    .my-custom-btn[_ngcontent-%COMP%]:hover {\n      transform: scale(1.1);\n    }"]}),n})();var o=r(5030),C=r(8283),T=r(42),q=r(4043),v=r(8977);const I=["webComponent"];function y(n,i){1&n&&(e.TgZ(0,"div",24)(1,"div",25),e._UZ(2,"app-input",26)(3,"app-input",27)(4,"app-input",28)(5,"app-input",29)(6,"app-input",30)(7,"app-input",31),e.qZA(),e.TgZ(8,"div",32),e._UZ(9,"app-input",33)(10,"app-input",34)(11,"app-input",35)(12,"app-input",36)(13,"app-input",37)(14,"app-input-switch",38),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(2),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1))}const N=[{path:"",pathMatch:"full",redirectTo:"introduction"},{path:"introduccion",component:U},{path:"flujo",component:E},{path:"personalizacion",component:f},{path:"sandbox",component:(()=>{class n{constructor(t){this.renderer=t,this.formAutocomplete=!1,this.SIMPLE_ACCOUNT_ROUTES=d.Y,this.account=new o.cw({jwt:new o.NI("",[o.kI.required]),subscriptionKey:new o.NI("",[o.kI.required]),commerceId:new o.NI("",[o.kI.required]),businessName:new o.NI("",[]),logo:new o.NI("",[]),inline:new o.NI(!1,[o.kI.required]),primaryColor:new o.NI("#05BE50",[o.kI.required]),secondaryColor:new o.NI("#0039A6",[o.kI.required]),accentColor:new o.NI("#F44336",[o.kI.required]),regularTypography:new o.NI("",[]),mediumTypography:new o.NI("",[]),boldTypography:new o.NI("",[]),documentNumber:new o.NI("",[]),residenceCountry:new o.NI("",[]),birthCountry:new o.NI("",[]),nationality:new o.NI("",[]),email:new o.NI("",[]),phoneNumber:new o.NI("",[]),streetName:new o.NI("",[]),streetNumber:new o.NI("",[]),block:new o.NI("",[]),lot:new o.NI("",[]),apartment:new o.NI("",[]),lockOnAutocomplete:new o.NI(!1,[])})}generateWebComponent(){const t=this.content.nativeElement.children[0];t&&this.renderer.removeChild(this.content.nativeElement,t);const a=this.renderer.createElement("ibk-account");a.setAttribute("id",this.account.value["account-creation-component"]),a.setAttribute("jwt",this.account.value.jwt),a.setAttribute("subscription-key",this.account.value.subscriptionKey),a.setAttribute("commerce-id",this.account.value.commerceId),a.setAttribute("business-name",this.account.value.businessName),a.setAttribute("logo-url",this.account.value.logo),a.setAttribute("inline",this.account.value.inline),a.setAttribute("primary",this.account.value.primaryColor),a.setAttribute("secondary",this.account.value.secondaryColor),a.setAttribute("accent",this.account.value.accentColor),a.setAttribute("regular-typography",this.account.value.regularTypography),a.setAttribute("medium-typography",this.account.value.mediumTypography),a.setAttribute("bold-typography",this.account.value.boldTypography),a.autocompleteData={documentNumber:this.account.value.documentNumber,residenceCountry:this.account.value.residenceCountry,birthCountry:this.account.value.birthCountry,nationality:this.account.value.nationality,email:this.account.value.email,phoneNumber:this.account.value.phoneNumber,streetName:this.account.value.streetName,streetNumber:this.account.value.streetNumber,block:this.account.value.block,lot:this.account.value.lot,apartment:this.account.value.apartment,lockOnAutocomplete:this.account.value.lockOnAutocomplete},this.renderer.appendChild(this.content.nativeElement,a)}showAutocompleteForm(){this.formAutocomplete=!this.formAutocomplete}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sandbox"]],viewQuery:function(t,a){if(1&t&&e.Gf(I,5),2&t){let l;e.iGM(l=e.CRH())&&(a.content=l.first)}},decls:47,vars:18,consts:[[1,"bold"],[1,"form",3,"formGroup"],[1,"form__definition"],[3,"secondLevel","opaque","noLegend"],["formControlName","jwt","label","JWT","placeholder","Ingrese el JWT",3,"required"],["formControlName","subscriptionKey","label","Subscription Key","placeholder","Ingrese el subscription key",3,"required"],["formControlName","commerceId","label","Commerce Id","placeholder","Ingrese el commerce id",3,"required"],["formControlName","businessName","label","Nombre del negocio","placeholder","Ingrese el nombre del negocio",3,"required"],["formControlName","logo","label","URL del logo del negocio","placeholder","Ingrese la URL del logo del negocio",3,"required"],["formControlName","inline","label","Inline"],[1,"form__personalization"],["formControlName","primaryColor","label","Color primario","value","#05BE50"],["formControlName","secondaryColor","label","Color secundario","value","#0039A6"],["formControlName","accentColor","label","Color acento","value","#F44336"],["formControlName","regularTypography","label","Nombre de la tipograf\xeda regular","placeholder","Ingrese el nombre"],["formControlName","mediumTypography","label","Nombre de la tipograf\xeda media","placeholder","Ingrese el nombre"],["formControlName","boldTypography","label","Nombre de la tipograf\xeda negrilla","placeholder","Ingrese el nombre"],[1,"form__button-autocomplete",3,"line","click"],["class","form__autocomplete",4,"ngIf"],[1,"form__button",3,"disabled","click"],[3,"noLegend"],[1,"web-component"],["webComponent",""],["image","assets/icons/tools_icon.svg","title","Revisa nuestra secci\xf3n de integraci\xf3n","description","Luego de haber probado el componente en el sandbox, ya podr\xe1s revisar el c\xf3digo detalle para tu\n   integraci\xf3n.",3,"routerLink"],[1,"form__autocomplete"],[1,"form__autocomplete-1"],["formControlName","documentNumber","label","N\xfamero de documento","placeholder","Ingrese el documento",3,"required"],["formControlName","residenceCountry","label","Pa\xeds de residencia","placeholder","Ingrese el pa\xeds",3,"required"],["formControlName","birthCountry","label","Pa\xeds de nacimiento","placeholder","Ingrese el pa\xeds",3,"required"],["formControlName","nationality","label","Nacionalidad","placeholder","Ingrese la nacionalidad",3,"required"],["formControlName","email","label","Correo electr\xf3nico","placeholder","Ingrese el correo",3,"required"],["formControlName","phoneNumber","label","Tel\xe9fono","placeholder","Ingrese el tel\xe9fono",3,"required"],[1,"form__autocomplete-2"],["formControlName","streetName","label","Direcci\xf3n: Nombre de la calle","placeholder","Ingrese",3,"required"],["formControlName","streetNumber","label","Direcci\xf3n: N\xfamero de la calle","placeholder","Ingrese",3,"required"],["formControlName","block","label","Direcci\xf3n: Manzana","placeholder","Ingrese",3,"required"],["formControlName","lot","label","Direcci\xf3n: Lote","placeholder","Ingrese",3,"required"],["formControlName","apartment","label","Direcci\xf3n: Interior","placeholder","Ingrese",3,"required"],["formControlName","lockOnAutocomplete","label","Los campos autocompletados ser\xe1n de s\xf3lo lectura"]],template:function(t,a){1&t&&(e.TgZ(0,"app-title"),e._uU(1,"Sandbox"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," Aqu\xed podr\xe1s interactuar con el "),e.TgZ(4,"span",0),e._uU(5,"web component de simulaci\xf3n"),e.qZA(),e._uU(6," para ver su funcionamiento y posibles configuraciones.\n"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"app-paragraph"),e._uU(9," Ingresa los siguientes campos para crear la simulaci\xf3n del componente:\n"),e.qZA(),e.TgZ(10,"form",1)(11,"div",2)(12,"app-subtitle",3),e._uU(13," DEFINICI\xd3N "),e.qZA(),e._UZ(14,"app-input",4)(15,"app-input",5)(16,"app-input",6)(17,"app-input",7)(18,"app-input",8)(19,"app-input-switch",9),e.qZA(),e.TgZ(20,"div",10)(21,"app-subtitle",3),e._uU(22," PERSONALIZACI\xd3N "),e.qZA(),e._UZ(23,"app-input-color",11)(24,"app-input-color",12)(25,"app-input-color",13)(26,"app-input",14)(27,"app-input",15)(28,"app-input",16),e.qZA(),e._UZ(29,"br"),e.TgZ(30,"app-button",17),e.NdJ("click",function(){return a.showAutocompleteForm()}),e._uU(31),e.qZA(),e._UZ(32,"br"),e.YNc(33,y,15,11,"div",18),e.TgZ(34,"app-button",19),e.NdJ("click",function(){return a.generateWebComponent()}),e._uU(35," Crear Web Component "),e.qZA()(),e.TgZ(36,"app-subtitle",20),e._uU(37,"Web Component"),e.qZA(),e.TgZ(38,"app-paragraph"),e._uU(39," Presiona el bot\xf3n "),e.TgZ(40,"span",0),e._uU(41,"crear web component"),e.qZA(),e._uU(42," para crearlo o actualizar su configuraci\xf3n\n"),e.qZA(),e._UZ(43,"div",21,22)(45,"br")(46,"app-banner",23)),2&t&&(e.xp6(10),e.Q6J("formGroup",a.account),e.xp6(2),e.Q6J("secondLevel",!0)("opaque",!0)("noLegend",!0),e.xp6(2),e.Q6J("required",!0),e.xp6(1),e.Q6J("required",!0),e.xp6(1),e.Q6J("required",!0),e.xp6(1),e.Q6J("required",!1),e.xp6(1),e.Q6J("required",!1),e.xp6(3),e.Q6J("secondLevel",!0)("opaque",!0)("noLegend",!0),e.xp6(9),e.Q6J("line",!0),e.xp6(1),e.hij(" ",a.formAutocomplete?"Ocultar":"Ver"," formulario de autocompletado "),e.xp6(2),e.Q6J("ngIf",a.formAutocomplete),e.xp6(1),e.Q6J("disabled","INVALID"===a.account.status),e.xp6(2),e.Q6J("noLegend",!0),e.xp6(10),e.Q6J("routerLink",a.SIMPLE_ACCOUNT_ROUTES.INTRODUCTION))},dependencies:[_.O5,s.rH,u.r,c.w,p.H,C.a,T.r,q.z,v.a,g.S,o._Y,o.JJ,o.JL,o.Q7,o.sg,o.u],styles:[".form[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);justify-content:space-around;row-gap:10px;column-gap:30px}.form__personalization--color[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-block;margin-right:10px;min-width:150px;margin-bottom:5px}.form__button-autocomplete[_ngcontent-%COMP%]{display:grid;grid-column-start:1;grid-column-end:3;grid-row-start:2}.form__autocomplete[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);justify-content:space-around;row-gap:10px;column-gap:30px;grid-column-start:1;grid-column-end:3;grid-row-start:3}.form__button[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3;grid-row-start:4}"]}),n})()},{path:"app-moviles",component:(()=>{class n{constructor(){this.scriptAndroid='\n    class MainActivity : AppCompatActivity() {\n\n      override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        web_view.settings.javaScriptEnabled = true\n        web_view.webViewClient = WebViewClient()\n\n        // Escribimos el c\xf3digo HTML dentro de un string multi l\xednea\n        // y lo cargamos dentro del Web View a trav\xe9s del m\xe9todo loadData\n\n        val unencodedHtml = """\n          <html>\n            <body>\n              <ibk-account\n                jwt="__JWT__"\n                commerce-id="__COMMERCE_ID__"\n                subscription-key="__SUBSCRIPTION_KEY__">\n              </ibk-account>\n\n              <script\n                type="module"\n                src="https://web-qa.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">\n              <\/script>\n            </body>\n          </html>\n        """\n\n        val encodedHtml = Base64.encodeToString(unencodedHtml.getBytes(), Base64.NO_PADDING);\n        webView.loadData(encodedHtml, "text/html", "base64");\n      }\n    }\n  ',this.scriptIos='\n    import UIKit\n    import WebKit\n\n    class ViewController: UIViewController {\n      override func viewDidLoad() {\n        super.viewDidLoad()\n\n        let html = """\n        <html>\n          <body>\n            <ibk-account\n              id="account-wc"\n              jwt="__JWT__"\n              commerce-id="__COMMERCE_ID__"\n              subscription-key="__SUBSCRIPTION_KEY__">\n            </ibk-account>\n\n            <script\n              type="module"\n              src="https://web-qa.digital.interbank.pe/bindings/js/accounts@0.0.1/ibk-account/ibk-account.esm.js">\n            <\/script>\n\n            <script>\n              const element = document.getElementById(\'account-wc\');\n\n              element.addEventListener(\'accountCreated\', event => {\n                // El objeto emitido dentro del detalle del evento\n                console.log(event.detail);\n                // {\n                //   accountCorrelationId: \'correlation-id\',\n                //   accountDataSharing: true,\n                //   cci: \'account-cci\',\n                //   accountId: \'account-id\',\n                // }\n              });\n            <\/script>\n          </body>\n        </html>\n        """\n\n        let webView = WKWebView(frame: view.frame)\n        webView.loadHTMLString(html, baseURL: nil)\n        view.addSubview(webView)\n      }\n    }\n  '}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mobile"]],decls:17,vars:2,consts:[[1,"bold"],[3,"code"]],template:function(t,a){1&t&&(e.TgZ(0,"app-title"),e._uU(1,"Apps m\xf3viles"),e.qZA(),e.TgZ(2,"app-paragraph"),e._uU(3," El WebComponent de apertura de cuenta de Interbank tambi\xe9n puede ser usado dentro de tus aplicaciones m\xf3viles a trav\xe9s de un "),e.TgZ(4,"span",0),e._uU(5,"Web View"),e.qZA(),e._uU(6,".\n"),e.qZA(),e.TgZ(7,"app-subtitle"),e._uU(8,"Android"),e.qZA(),e.TgZ(9,"app-paragraph"),e._uU(10,"Para usar el WebComponent deber\xe1s seguir los siguientes pasos:"),e.qZA(),e._UZ(11,"app-code-block",1),e.TgZ(12,"app-subtitle"),e._uU(13,"iOS"),e.qZA(),e.TgZ(14,"app-paragraph"),e._uU(15,"Para usar el WebComponent deber\xe1s seguir los siguientes pasos:"),e.qZA(),e._UZ(16,"app-code-block",1)),2&t&&(e.xp6(11),e.Q6J("code",a.scriptAndroid),e.xp6(5),e.Q6J("code",a.scriptIos))},dependencies:[u.r,c.w,p.H,m.P]}),n})()}];var F=r(4466);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.ez,s.Bz.forChild(N),F.m,o.UX]}),n})()}}]);