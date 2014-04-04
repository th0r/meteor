Template.api.isClient = {
  id: "meteor_isclient",
  name: "Meteor.isClient",
  locus: "Везде",
  descr: ["Переменная типа Boolean. True, если находимся на клиенте."]
};

Template.api.isServer = {
  id: "meteor_isserver",
  name: "Meteor.isServer",
  locus: "Везде",
  descr: ["Переменная типа Boolean. True, если находимся на сервере."]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Везде",
  descr: ["Выполняет код сразу же после запуска клиента или сервера."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Функция, которую необходимо выполнить после запуска приложения."}
  ]
};

Template.api.absoluteUrl = {
  id: "meteor_absoluteurl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Везде",
  descr: ["Сгенерировать абсолютный урл для приложения. Сервер использует "
          + "значение переменной среды `ROOT_URL`, чтобы определить, где он "
          + "запущен. Эта переменная устанавливается автоматически при "
          + "развертывании приложения через `meteor deploy`, но при "
          + "использовании `meteor bundle` вы должны сделать это сами."],
  args: [
    {name: "path",
     type: "String",
     descr: 'Путь, который необходимо добавить к базовому URL. Не добавляйте ' +
            ' вначало "`/`".'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "Создать HTTPS URL."
    },
    {name: "replaceLocalhost",
     type: "Boolean",
     descr: "Заменить localhost на 127.0.0.1. Полезно при использовании сервисов, которые не определяют localhost как доменное имя."},
    {name: "rootUrl",
     type: "String",
     descr: "Переопределить базовый URL, полученный из переменной среды ROOT_URL. Например: \"`http://foo.example.com`\""
    }
  ]
};

Template.api.settings = {
  id: "meteor_settings",
  name: "Meteor.settings",
  locus: "Везде",
  descr: ["`Meteor.settings` содержит настройки приложения. Их можно указать " +
          "либо передав опцию `--settings` (содержащую путь к JSON-файлу) " +
          "команде `meteor run` или `meteor deploy`, либо указав их в переменной " +
          "среды `METEOR_SETTINGS` в виде JSON-строки. Если вы не укажите " +
          "никаких настроек, то `Meteor.settings` будет пустым объектом. Если " +
          "объект содержит ключ `public`, то `Meteor.settings.public` будет " +
          "доступен как на сервере, так и на клиенте. Все остальные ключи " +
          "будут доступны только на сервере."]
};

Template.api.release = {
  id: "meteor_release",
  name: "Meteor.release",
  locus: "Везде",
  descr: ["`Meteor.release` содержит название " +
          "[версии](#meteorupdate) Meteor, на которой был создан проект " +
          "(например, `\"" +
          Meteor.release +
          "\"`). Если же проект был создан на Meteor, собранном на основе " +
          "git-коммита, то значение переменной будет `undefined`."]
};

Template.api.ejsonParse = {
  id: "ejson_parse",
  name: "EJSON.parse(str)",
  locus: "Везде",
  args: [ {name: "str", type: "String", descr: "A string to parse into an EJSON value."} ],
  descr: ["Parse a string into an EJSON value. Throws an error if the string is not valid EJSON."]
},

Template.api.ejsonStringify = {
  id: "ejson_stringify",
  name: "EJSON.stringify(val, [options])",
  locus: "Везде",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to stringify."} ],
  options: [
    {name: "indent",
     type: "Boolean, Integer, or String",
     descr: "Indents objects and arrays for easy readability.  When `true`, indents by 2 spaces; when an integer, indents by that number of spaces; and when a string, uses the string as the indentation pattern."},
    {name: "canonical",
     type: "Boolean",
     descr: "When `true`, stringifies keys in an object in sorted order."}
  ],
  descr: ["Serialize a value to a string.\n\nFor EJSON values, the serialization " +
          "fully represents the value. For non-EJSON values, serializes the " +
          "same way as `JSON.stringify`."]
},


Template.api.ejsonFromJSONValue = {
  id: "ejson_from_json_value",
  name: "EJSON.fromJSONValue(val)",
  locus: "Везде",
  args: [ {name: "val", type: "JSON-compatible value", descr: "A value to deserialize into EJSON."} ],
  descr: ["Deserialize an EJSON value from its  plain JSON representation."]
},

Template.api.ejsonToJSONValue = {
  id: "ejson_to_json_value",
  name: "EJSON.toJSONValue(val)",
  locus: "Везде",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to serialize to plain JSON."} ],
  descr: ["Serialize an EJSON-compatible value into its plain JSON representation."]
},

Template.api.ejsonEquals = {
  id: "ejson_equals",
  name: "EJSON.equals(a, b, [options])",
  locus: "Везде",
  args: [ {name: "a", type: "EJSON-compatible object"},
          {name: "b", type: "EJSON-compatible object"} ],
  options: [
    {name: "keyOrderSensitive",
     type: "Boolean",
     descr: "Compare in key sensitive order, if supported by the JavaScript implementation.  For example, `{a: 1, b: 2}` is equal to `{b: 2, a: 1}` only when `keyOrderSensitive` is `false`.  The default is `false`."}
  ],
  descr: ["Return true if `a` and `b` are equal to each other.  Return false otherwise." +
          "  Uses the `equals` method on `a` if present, otherwise performs a deep comparison."]
},

Template.api.ejsonClone = {
  id: "ejson_clone",
  name: "EJSON.clone(val)",
  locus: "Везде",
  args: [ {name: "val", type: "EJSON-compatible value", descr: "A value to copy."} ],
  descr: ["Return a deep copy of `val`."]
},

Template.api.ejsonNewBinary = {
  id: "ejson_new_binary",
  name: "EJSON.newBinary(size)",
  locus: "Везде",
  args: [ {name: "size", type: "Number", descr: "The number of bytes of binary data to allocate."} ],
  descr: ["Allocate a new buffer of binary data that EJSON can serialize."]
},

Template.api.ejsonIsBinary = {
  id: "ejson_is_binary",
  name: "EJSON.isBinary(x)",
  locus: "Везде",
  descr: ["Returns true if `x` is a buffer of binary data, as returned from [`EJSON.newBinary`](#ejson_new_binary)."]
},

Template.api.ejsonAddType = {
  id: "ejson_add_type",
  name: "EJSON.addType(name, factory)",
  locus: "Везде",
  args: [
    {name: "name",
     type: "String",
     descr: "A tag for your custom type; must be unique among custom data types defined in your project, and must match the result of your type's `typeName` method."
    },
    {name: "factory",
     type: "Function",
     descr: "A function that deserializes a JSON-compatible value into an instance of your type.  This should match the serialization performed by your type's `toJSONValue` method."
    }
  ],
  descr: ["Add a custom datatype to EJSON."]
};

Template.api.ejsonTypeClone = {
  id: "ejson_type_clone",
  name: "<i>instance</i>.clone()",
  descr: ["Return a value `r` such that `this.equals(r)` is true, and modifications to `r` do not affect `this` and vice versa."]
};

Template.api.ejsonTypeEquals = {
  id: "ejson_type_equals",
  name: "<i>instance</i>.equals(other)",
  args: [ {name: "other", type: "object", descr: "Another object to compare this to."}],
  descr: ["Return `true` if `other` has a value equal to `this`; `false` otherwise."]
};

Template.api.ejsonTypeName = {
  id: "ejson_type_typeName",
  name: "<i>instance</i>.typeName()",
  descr: ["Return the tag used to identify this type.  This must match the tag used to register this type with [`EJSON.addType`](#ejson_add_type)."]
};

Template.api.ejsonTypeToJSONValue = {
  id: "ejson_type_toJSONValue",
  name: "<i>instance</i>.toJSONValue()",
  descr: ["Serialize this instance into a JSON-compatible value."]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Сервер",
  descr: ["Публикует набор данных."],
  args: [
    {name: "name",
     type: "String",
     descr: "Название публикации. Если `null`, то она считается безымянной и автоматически рассылается всем подключенным клиентам."},
    {name: "func",
     type: "Function",
     descr: "Функция, вызываемая на сервере каждый раз при подписке клиента на эту публикацию. Внутри функции `this` указывает на хэндлер публикации, описываемый ниже. Функция будет вызвана с теми же аргументами, которые были переданы в подписку (`subscribe`) на клиенте."}
  ]
};

Template.api.subscription_added = {
  id: "publish_added",
  name: "<i>this</i>.added(collection, id, fields)",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Информирует подписчика о добавлении в публикацию нового документа."],
  args: [
    {name: "collection",
     type: "String",
     descr: "Название коллекции, содержащей новый документ."
    },
    {name: "id",
     type: "String",
     descr: "ID нового документа."
    },
    {name: "fields",
     type: "Object",
     descr: "Поля нового документа. Если присутсвует поле `_id`, то оно игнорируется."
    }
  ]
};

Template.api.subscription_changed = {
  id: "publish_changed",
  name: "<i>this</i>.changed(collection, id, fields)",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Информирует подписчика об изменении документа, находящегося в публикации."],
  args: [
    {name: "collection",
     type: "String",
     descr: "Название коллекции, содержащей измененный документ."
    },
    {name: "id",
     type: "String",
     descr: "ID измененного документа."
    },
    {name: "fields",
     type: "Object",
     descr: "Измененные поля документа с их новыми значениями. Если поля нет в `fields`, значит оно не было изменено; если оно присутсвует в `fields` и равно `undefined`, значит оно было удалено из документа. Если присутсвует поле `_id`, то оно игнорируется."
    }
  ]
};

Template.api.subscription_removed = {
  id: "publish_removed",
  name: "<i>this</i>.removed(collection, id)",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Информирует подписчика об удалении из публикации нового документа."],
  args: [
    {name: "collection",
     type: "String",
     descr: "Название коллекции, из которой удалили документ."
    },
    {name: "id",
     type: "String",
     descr: "ID удаленного документа."
    }
  ]
};

Template.api.subscription_ready = {
  id: "publish_ready",
  name: "<i>this</i>.ready()",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Информирует подписчика о том, что начальный набор документов был полностью отправлен подписчику. На клиенте после этого будет вызван колбэк `onReady` метода [`Meteor.subscribe`](#meteor_subscribe) (если он был указан)."]
};


Template.api.subscription_error = {
  id: "publish_error",
  name: "<i>this</i>.error(error)",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Останавливает клиентскую подписку и вызывет на клиенте колбэк `onError` метода [`Meteor.subscribe`](#meteor_subscribe) (если он был указан). Если аргумент `error` не является экземпляром объекта [`Meteor.Error`](#meteor_error), то он будет, по возможности, [в него преобразован](#meteor_error)."]
};

Template.api.subscription_stop = {
  id: "publish_stop",
  name: "<i>this</i>.stop()",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Останавливает клиентскую подписку, *не* вызывая при этом на клиенте колбэк `onError`."]
};

Template.api.subscription_onStop = {
  id: "publish_onstop",
  name: "<i>this</i>.onStop(func)",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Регистрирует колбэк, вызываемый при остановке подписки."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Функция, вызываемая при остановке подписки"
    }
  ]
};

Template.api.subscription_userId = {
  id: "publish_userId",
  name: "<i>this</i>.userId",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Id залогиненного пользователя, либо `null`, если он не залогинен."]
};


Template.api.subscription_connection = {
  id: "publish_connection",
  name: "<i>this</i>.connection",
  locus: "Сервер",
  descr: ["Используется внутри функции публикации. Входящее [соединение](#meteor_onconnection) для данной подписки."]
};


Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, callbacks])",
  locus: "Клиент",
  descr: ["Подписывает на набор данных. Возвращает хэндлер, содержащий методы `stop()` и `ready()`."],
  args: [
    {name: "name",
     type: "String",
     descr: "Название подписки. Должно совпадать с названием публикации, созданной с помощью `Meteor.publish` на сервере."},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "Необязательные аргументы, которые будут переданы на сервер в функцию публикации."},
    {name: "callbacks",
     type: "Function or Object",
     descr: "Необязательный аргумент. Объект может содержать колбэки `onError` и `onReady`. Если вместо объекта передана функция, то она считается колбэком `onReady`."}
  ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Везде",
  descr: ["Объявляет функции, которые могут удаленно вызываться клиентами."],
  args: [
    {name: "methods",
     type: "Object",
     descr: "Словарь методов, ключами в котором являются их названия, а значениями - сами функции."}
  ]
};

Template.api.method_invocation_userId = {
  id: "method_userId",
  name: "<i>this</i>.userId",
  locus: "Везде",
  descr: ["Id пользователя, вызвавшего этот метод, или `null`, если пользователь не был залогинен."]
};

Template.api.method_invocation_setUserId = {
  id: "method_setUserId",
  name: "<i>this</i>.setUserId(userId)",
  locus: "Сервер",
  descr: ["Устанавливает Id текущего залогиненного пользователя."],
  args: [
    {name: "userId",
     type: "String or null",
     descr: "Значение, которое должно быть присвоено `userId` для данного подключения."}
  ]
};

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Сервер",
  descr: ["Используется внутри метода. Разрешает запуск следующего метода от данного клиента в новом волокне."]
};

Template.api.method_invocation_isSimulation = {
  id: "method_issimulation",
  name: "<i>this</i>.isSimulation",
  locus: "Везде",
  descr: ["Используется внутри метода. Значение типа Boolean. Равно `true`, если вызывается не настоящий метод, а заглушка."]
};

Template.api.method_invocation_connection = {
  id: "method_connection",
  name: "<i>this</i>.connection",
  locus: "Сервер",
  descr: ["Используется внутри метода. [Соединение](#meteor_onconnection), по которому был произведен вызов этого метода. Равно `null`, если у вызова метода нет ассоциированного с ним соединения (например, метод вызывался самим сервером)."]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Везде",
  descr: ["Класс ошибок, возбуждаемых методами."],
  args: [
    {name: "error",
     type: "Number",
     descr: "Цифровой код ошибки, в большинстве случаев совпадающий с HTTP-кодами (например, 404, 500)."},
    {name: "reason",
     type: "String",
     descr: "Необязательный аргумент. Короткое описание ошибки, например 'Not found'."},
    {name: "details",
     type: "String",
     descr: "Необязательный аргумент. Дополнительная информация об ошибке, например, стек вызовов."}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(name, param1, param2, ... [, asyncCallback])",
  locus: "Везде",
  descr: ["Вызывает метод."],
  args: [
    {name: "name",
     type: "String",
     descr: "Название вызываемого метода."},
    {name: "param1, param2, ...",
     type: "EJSON",
     descr: "Аргументы для вызываемого метода. Могут отсутствовать."},
    {name: "asyncCallback",
     type: "Function",
     descr: "Необязательный колбэк, вызываемый асинхронно после завершения работы метода. В него передается результат метода, или ошибка. Если колбэк не указан, то метод вызывается синхронно, если это возможно (подробности ниже)."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, options] [, asyncCallback])",
  locus: "Везде",
  descr: ["Вызывает метод, передавая в него массив аргументов."],
  args: [
    {name: "name",
     type: "String",
     descr: "Название вызываемого метода."},
    {name: "params",
     type: "Array",
     descr: "Массив аргументов для метода."},
    {name: "asyncCallback",
     type: "Function",
     descr: "Необязательный колбэк; используется так же, как и в [`Meteor.call`](#meteor_call)."}
  ],
  options: [
    {name: "wait",
     type: "Boolean",
     descr: "(Только на клиенте) Если `true`, Meteor не будет начинать вызов удаленного метода до тех пор, пока не завершатся все предыдущие. Также Meteor не будет начинать вызов последующих методов до тех пор, пока не выполнится этот."},
    {name: "onResultReceived",
     type: "Function",
     descr: "(Только на клиенте) Этот колбэк будет вызван сразу же, как только будет доступен результат работы метода. Так же, как и в случае с `asyncCallback`, в него будет передана либо ошибка, либо результат. Локальный кэш в этот момент может быть еще не в актуальном состоянии."}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Клиент",
  descr: ["Возвращает текущий статус соединения. Реактивный источник данных."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Клиент",
  descr: [
    "Незамедлительно пытается восстановить подключение к серверу, если оно разорвано.",
    "Если соединение уже установлено, то метод ничего не делает."]
};

Template.api.disconnect = {
  id: "meteor_disconnect",
  name: "Meteor.disconnect()",
  locus: "Клиент",
  descr: [
    "Разрывает подключение между клиентом и сервером."]
};

Template.api.connect = {
  id: "ddp_connect",
  name: "DDP.connect(url)",
  locus: "Везде",
  descr: ["Служит для подключения к серверу другого приложения на Meteor, что позволяет подписываться на его публикации и вызывать его методы."],
  args: [
    {name: "url",
     type: "String",
     descr: "URL другого приложения на Meteor."}
  ]
};

Template.api.onConnection = {
  id: "meteor_onconnection",
  name: "Meteor.onConnection(callback)",
  locus: "Сервер",
  descr: ["Регистрирует колбэк, который будет вызван при установке нового DDP-соединения с сервером."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Функция, вызываемая при установке нового DDP-соединения с сервером."}
  ]
};

// onAutopublish

Template.api.meteor_collection = {
  id: "meteor_collection",
  name: "new Meteor.Collection(name, [options])",
  locus: "Везде",
  descr: ["Конструктор коллекции"],
  args: [
    {name: "name",
     type: "String",
     descr: "Название коллекции. Если `null`, то будет создана несинхронизируемая локальная коллекция."}
  ],
  options: [
    {name: "connection",
     type: "Object",
     descr: "Подключение, которое будет управлять этой коллекцией. Если не указано, будет использоваться подключение по-умолчанию. Чтобы использовать другой Meteor-сервер, передайте сюда результат вызова [`DDP.connect`](#ddp_connect). Укажите `null`, чтобы не использовать подключение. Несинхронизируемые коллекции (параметр `name` равен `null`) не могут использовать подключение."
    },
    {name: "idGeneration",
     type: "String",
     descr: "Метод генерации поля `_id` для новых документов коллекции. Возможные значения:\n\n" +
     " - **`'STRING'`**: произвольные строки\n" +
     " - **`'MONGO'`**: значения произвольных объектов [`Meteor.Collection.ObjectID`](#collection_object_id)\n\n" +
     "По-умолчанию используется метод `'STRING'`."
    },
    {name: "transform",
     type: "Function",
     descr: "Необязательная функция трансформации. Она служит для преобразования документов перед тем, как они будут возвращены функциями `fetch` и `findOne`, а также перед передачей их в колбэки функций `observe`, `map`, `forEach`, `allow` и `deny`. Преобразований *не происходит* для колбэков функции `observeChanges`, а также для курсоров, возвращенных из функций публикации."
    }
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Везде",
  descr: ["Ищет в коллекции документы, соответствующие селектору."],
  args: [
    {name: "selector",
     type: "Mongo-селектор (Object или String)",
     type_link: "selectors",
     descr: "Запрос."}
  ],
  options: [
    {name: "sort",
     type: "Указатель сортировки",
     type_link: "sortspecifiers",
     descr: "Порядок сортировки (по-умолчанию: естественный порядок)"},
    {name: "skip",
     type: "Number",
     descr: "Количество результатов, которое необходимо пропустить (считая с начала)."},
    {name: "limit",
     type: "Number",
     descr: "Максимальное количество возвращаемых результатов."},
    {name: "fields",
     type: "Указатель полей",
     type_link: "fieldspecifiers",
     descr: "Словарь возвращаемых или исключаемых полей."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Только на клиенте) По-умолчанию `true`; укажите `false`, чтобы отключить реактивность."},
    {name: "transform",
     type: "Function",
     descr: "Переопределяет `transform`, указанный при создании [коллекции](#collections). Укажите `null`, чтобы отключить трансформацию."}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Везде",
  descr: ["Ищет первый документ, удовлетворяющий серектору, с учетом параметров сортировки и пропуска результатов."],
  args: [
    {name: "selector",
     type: "Mongo-селектор (Object или String)",
     type_link: "selectors",
     descr: "Запрос."}
  ],
  options: [
    {name: "sort",
     type: "Указатель сортировки",
     type_link: "sortspecifiers",
     descr: "Порядок сортировки (по-умолчанию: естественный порядок)"},
    {name: "skip",
     type: "Number",
     descr: "Количество результатов, которое необходимо пропустить (считая с начала)."},
    {name: "fields",
     type: "Указатель полей",
     type_link: "fieldspecifiers",
     descr: "Словарь возвращаемых или исключаемых полей."},
    {name: "reactive",
     type: "Boolean",
     descr: "(Только на клиенте) По-умолчанию `true`; укажите `false`, чтобы отключить реактивность."},
    {name: "transform",
     type: "Function",
     descr: "Переопределяет `transform`, указанный при создании [коллекции](#collections). Укажите `null`, чтобы отключить трансформацию."
    }
  ]
};

Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Везде",
  descr: ["Добавляет документ в коллекцию. Возвращает его уникальный _id."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "Добавляемый документ. Может не содержать _id, в случае чего его автоматически сгенерирует Meteor."},
    {name: "callback",
     type: "Function",
     descr: "Необязательный аргумент. Первым параметром в колбэк будет передан объект ошибки, а вторым, если ошибки не было, _id добавленного документа."}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Везде",
  descr: ["Изменяет один или несколько документов в коллекции. Возвращает количество измененных документов."],
  args: [
    {name: "selector",
     type: "Mongo-селектор или String",
     type_link: "selectors",
     descr: "Указывает документы, которые необходимо изменить."},
    {name: "modifier",
     type: "Mongo-модификатор",
     type_link: "modifiers",
     descr: "Указывает, каким образом изменять документы."},
    {name: "callback",
     type: "Function",
     descr: "Необязательный аргумент. Первым параметром в колбэк будет передан объект ошибки, а вторым, если ошибки не было, количество измененных документов."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "По-умолчанию `false`. Укажите `true`, чтобы изменить все найденные документы."},
    {name: "upsert",
     type: "Boolean",
     descr: "Укажите `true`, чтобы добавить новый документ в случае, если ни один соответствующий документ не найден."}
  ]
};

Template.api.upsert = {
  id: "upsert",
  name: "<em>collection</em>.upsert(selector, modifier, [options], [callback])",
  locus: "Везде",
  descr: ["Изменяет один или несколько документов в коллекции, а в случае, если ни один не найден, добавляет новый. " +
          "Возвращает объект, содержащий свойства `numberAffected` (количество измененных документов) " +
          "и, если новый документ был добавлен в коллекцию, `insertedId` (его уникальный _id)."],
  args: [
    {name: "selector",
     type: "Mongo-селектор или String",
     type_link: "selectors",
     descr: "Указывает документы, которые необходимо изменить."},
    {name: "modifier",
     type: "Mongo-модификатор",
     type_link: "modifiers",
     descr: "Указывает, каким образом изменять документы."},
    {name: "callback",
     type: "Function",
     descr: "Необязательный аргумент. Первым параметром в колбэк будет передан объект ошибки, а вторым, если ошибки не было, количество измененных документов."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "По-умолчанию `false`. Укажите `true`, чтобы изменить все найденные документы."}
  ]
};


Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Везде",
  descr: ["Удаляет документы из коллекции."],
  args: [
    {name: "selector",
     type: "Mongo-селектор или String",
     type_link: "selectors",
     descr: "Указывает документы, которые необходимо удалить."},
    {name: "callback",
     type: "Function",
     descr: "Необязательный аргумент. Первым параметром в колбэк будет передан объект ошибки."}
  ]
};

Template.api.allow = {
  id: "allow",
  name: "<em>collection</em>.allow(options)",
  locus: "Сервер",
  descr: ["Разрешает пользователям изменять данную коллекцию прямо из клиентского кода, с учетом указанных вами ограничений."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Функции, которые анализируют предлагаемые изменения в БД и возвращают `true`, если их можно разрешить."},
    {name: "fetch",
     type: "Array или String",
     descr: "Необязательная оптимизация производительности. Ограничивает набор полей, которые будут получены из БД для анализа функциями `update` и `remove`."},
    {name: "transform",
     type: "Function",
     descr: "Переопределяет `transform`, указанный при создании [коллекции](#collections). Укажите `null`, чтобы отключить трансформацию."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Сервер",
  descr: ["Отменяет разрешающие правила."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "Функции, которые анализируют предлагаемые изменения в БД и возвращают `true`, если они должны быть запрещены, даже несмотря на то, что разрешающие правила их разрешили."},
    {name: "fetch",
     type: "Array или Strings",
     descr: "Необязательная оптимизация производительности. Ограничивает набор полей, которые будут получены из БД для анализа функциями `update` и `remove`."},
    {name: "transform",
     type: "Function",
     descr: "Переопределяет `transform`, указанный при создании [коллекции](#collections). Укажите `null`, чтобы отключить трансформацию."}
  ]
};


Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Везде",
  descr: ["Возвращает количество документов, на которые ссылается курсор."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Везде",
  descr: ["Возвращает все документы курсора в виде массива."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback, [thisArg])",
  locus: "Везде",
  descr: ["Вызывает колбэк поочередно для каждого документа из курсора."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Функиця-колбэк. Вызывается с тремя агрументами: документом, его индексом (начиная с нуля) и самим объектом курсора."},
    {name: "thisArg",
     type: "Любой",
     descr: "Объект, на который будет указывать `this` внутри колбэка."}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback, [thisArg])",
  locus: "Везде",
  descr: ["Преобразует документы курсора в массив объектов, используя колбэк."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Функция-колбэк. Вызывается с тремя агрументами: документом, его индексом (начиная с нуля) и самим объектом курсора."},
    {name: "thisArg",
     type: "Любой",
     descr: "Объект, на который будет указывать `this` внутри колбэка."}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Везде",
  descr: ["Сбрасывает курсор."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Везде",
  descr: ["Следит за запросом. Вызывает колбэки при изменении документов в нем."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Колбэки, вызываемые при изменении документов в запросе."}
  ]
};

Template.api.cursor_observe_changes = {
  id: "observe_changes",
  name: "<em>cursor</em>.observeChanges(callbacks)",
  locus: "Везде",
  descr: ["Следит за запросом. Вызывает колбэки при изменении документов в нем. В колбэки передаются только изменения в документах."],
  args: [
    {name: "callbacks",
     type: "Object",
     descr: "Колбэки, вызываемые при изменении документов в запросе."}
  ]
};

Template.api.random_id = {
  id: "meteor_id",
  name: "Random.id()",
  locus: "Везде",
  descr: ["Return a unique identifier."],
  args: [ ]
};

Template.api.collection_object_id = {
  id: "collection_object_id",
  name: "new Meteor.Collection.ObjectID(hexString)",
  locus: "Везде",
  descr: ["Создает `ObjectID`, используемый в MongoDB. Если вы не укажете `hexString`, то `ObjectID` будет сгенерирован случайным образом (не используя правила создания идентификаторов, используемые в MongoDB)."],
  args: [ {
    name: "hexString",
    type: "String",
    descr: ["Необязательный аргумент. Содержимое создаваемого ObjectID, состоящее из 24-ех шестнадцатеричных символов."]
  }]
};

Template.api.selectors = {
  id: "selectors",
  name: "Mongo-селекторы"
};

Template.api.modifiers = {
  id: "modifiers",
  name: "Mongo-модификаторы"
};

Template.api.sortspecifiers = {
  id: "sortspecifiers",
  name: "Указатели сортировки"
};

Template.api.fieldspecifiers = {
  id: "fieldspecifiers",
  name: "Указатели полей"
};

////// DEPS

Template.api.deps_autorun = {
  id: "deps_autorun",
  name: "Deps.autorun(runFunc)",
  locus: "Клиент",
  descr: ["Вызывает функцию и перевыполняет ее каждый раз при изменении ее зависимостей. Возвращает объект созданного реактивного контекста (`Сomputation`), который можно использовать для остановки перевыполнения или его отслеживания."],
  args: [
    {name: "runFunc",
     type: "Function",
     descr: "Вызываемая функция. Принимает единственный аргумент: возвращаемый из `Deps.autorun` объект созданного реактивного контекста (`Сomputation`)."}
  ]
};

Template.api.deps_flush = {
  id: "deps_flush",
  name: "Deps.flush()",
  locus: "Клиент",
  descr: ["Process all reactive updates immediately and ensure that all invalidated computations are rerun."]
};

Template.api.deps_nonreactive = {
  id: "deps_nonreactive",
  name: "Deps.nonreactive(func)",
  locus: "Клиент",
  descr: ["Run a function without tracking dependencies."],
  args: [
    {name: "func",
     type: "Function",
     descr: "A function to call immediately."}
  ]
};

Template.api.deps_active = {
  id: "deps_active",
  name: "Deps.active",
  locus: "Клиент",
  descr: ["True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun."]
};

Template.api.deps_currentcomputation = {
  id: "deps_currentcomputation",
  name: "Deps.currentComputation",
  locus: "Клиент",
  descr: ["The current computation, or `null` if there isn't one.  The current computation is the [`Deps.Computation`](#deps_computation) object created by the innermost active call to `Deps.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed."]
};

Template.api.deps_oninvalidate = {
  id: "deps_oninvalidate",
  name: "Deps.onInvalidate(callback)",
  locus: "Клиент",
  descr: ["Registers a new [`onInvalidate`](#computation_oninvalidate) callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered."}
  ]
};

Template.api.deps_afterflush = {
  id: "deps_afterflush",
  name: "Deps.afterFlush(callback)",
  locus: "Клиент",
  descr: ["Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run once and not on subsequent flushes unless `afterFlush` is called again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "A function to call at flush time."}
  ]
};

Template.api.computation_stop = {
  id: "computation_stop",
  name: "<em>computation</em>.stop()",
  locus: "Клиент",
  descr: ["Prevents this computation from rerunning."]
};

Template.api.computation_invalidate = {
  id: "computation_invalidate",
  name: "<em>computation</em>.invalidate()",
  locus: "Клиент",
  descr: ["Invalidates this computation so that it will be rerun."]
};

Template.api.computation_oninvalidate = {
  id: "computation_oninvalidate",
  name: "<em>computation</em>.onInvalidate(callback)",
  locus: "Клиент",
  descr: ["Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon future invalidations unless `onInvalidate` is called again after the computation becomes valid again."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "Function to be called on invalidation. Receives one argument, the computation that was invalidated."}
  ]
};

Template.api.computation_stopped = {
  id: "computation_stopped",
  name: "<em>computation</em>.stopped",
  locus: "Клиент",
  descr: ["True if this computation has been stopped."]
};

Template.api.computation_invalidated = {
  id: "computation_invalidated",
  name: "<em>computation</em>.invalidated",
  locus: "Клиент",
  descr: ["True if this computation has been invalidated (and not yet rerun), or if it has been stopped."]
};

Template.api.computation_firstrun = {
  id: "computation_firstrun",
  name: "<em>computation</em>.firstRun",
  locus: "Клиент",
  descr: ["True during the initial run of the computation at the time `Deps.autorun` is called, and false on subsequent reruns and at other times."]
};

Template.api.dependency_changed = {
  id: "dependency_changed",
  name: "<em>dependency</em>.changed()",
  locus: "Клиент",
  descr: ["Invalidate all dependent computations immediately and remove them as dependents."]
};

Template.api.dependency_depend = {
  id: "dependency_depend",
  name: "<em>dependency</em>.depend([fromComputation])",
  locus: "Клиент",
  descr: ["Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.", "If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.", "Returns true if the computation is a new dependent of `dependency` rather than an existing one."],
  args: [
    {name: "fromComputation",
     type: "Deps.Computation",
     descr: "An optional computation declared to depend on `dependency` instead of the current computation."}
  ]
};

Template.api.dependency_hasdependents = {
  id: "dependency_hasdependents",
  name: "<em>dependency</em>.hasDependents()",
  locus: "Клиент",
  descr: ["True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change."]
};

//////

// writeFence
// invalidationCrossbar


Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};


Template.api.user = {
  id: "meteor_user",
  name: "Meteor.user()",
  locus: "Везде, кроме функций публикации",
  descr: ["Возвращает учетную запись текущего пользователя, или `null`, если пользователь не залогинен. Реактивный источник данных."]
};

Template.api.currentUser = {
  id: "template_currentuser",
  name: "{{currentUser}}",
  locus: "Шаблоны",
  descr: ["Вызывает [Meteor.user()](#meteor_user). Используйте `{{#if currentUser}}`, чтобы проверить, залогинен ли пользователь."]
};

Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Везде, кроме функций публикации",
  descr: ["Возвращает id текущего пользователя, или `null`, если пользователь не залогинен. Реактивный источник данных."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Везде",
  descr: ["[Коллекция](#collections), содержащая документы пользователей."]
};

Template.api.loggingIn = {
  id: "meteor_loggingin",
  name: "Meteor.loggingIn()",
  locus: "Клиент",
  descr: ["Возвращает `true`, если в данный момент происходит аутентификация пользователя при помощи таких методов, как `Meteor.loginWithPassword`, `Meteor.loginWithFacebook` или `Accounts.createUser`. Реактивный источник данных."]
};

Template.api.loggingInTemplate = {
  id: "template_loggingin",
  name: "{{loggingIn}}",
  locus: "Шаблоны",
  descr: ["Вызывает [Meteor.loggingIn()](#meteor_loggingin)."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Клиент",
  descr: ["Разлогинивает пользователя."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};

Template.api.logoutOtherClients = {
  id: "meteor_logoutotherclients",
  name: "Meteor.logoutOtherClients([callback])",
  locus: "Клиент",
  descr: ["Разлогинивает всех клиентов, залогиненных под данным пользователем, кроме клиента, вызывающего эту функцию."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Клиент",
  descr: ["Логинит пользователя с помощью пароля."],
  args: [
    {
      name: "user",
      type: "Object или String",
      descr: "Если указана строка, то она интерпретируется либо как имя пользователя, либо как email. Если же указан объект, то в нем должно быть только одно поле: либо `email`, либо `username`, либо `id`."
    },
    {
      name: "password",
      type: "String",
      descr: "Пароль пользователя. Пароль __не__ отсылается в голом виде &mdash; он защищается по протоколу [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Клиент",
  descr: ["Логинит пользователя с помощью сторонних сервисов."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Массив строк",
      descr: "Список разрешений, которые необходимо запросить у пользователя."
    },
    {
      name: "requestOfflineToken",
      type: "Boolean",
      descr: "Если `true`, запрашивает у пользователя разрешение действовать от его имени, когда он не в сети. В этом случае в поле `services` учетной записи пользователя будет сохранен дополнительный offline-токен. В данный момент поддерживается только сервис Google."
    },
    {
      name: "forceApprovalPrompt",
      type: "Boolean",
      descr: "Если `true`, принудительно запрашивает у пользователя список разрешений, необходимых вашему приложению, даже если они уже были получены. В данный момент поддерживается только сервис Google."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Везде",
  descr: ["Настраивает систему учетных записей."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "Новые пользователи, указавшие email-адрес, будут получать письмо с просьбой о его подтверждении."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "Все вызовы [`createUser`](#accounts_createuser) с клиента будут отклонены. Кроме того, если вы используете пакет [accounts-ui](#accountsui), ссылка \"Create account\", предназначенная для регистрации нового пользователя, будет недоступна."
    },
    {
      name: "restrictCreationByEmailDomain",
      type: "String или Function",
      descr: "Если указано, то будет разрешена регистрация только тех новых пользователей, чей email-адрес находится в указанном домене, или удовлетворяет указанной функции (она возвращает `true`). В функцию передается полный email-адрес нового пользователя. Работает при логине с использованием пароля, а также со всеми логин-сервисами, предоставляющими информацию о email-адресе пользователя (Google, Facebook, GitHub). Установка этой опции не влияет на возможность логина для существующих пользователей. Пример: `Accounts.config({ restrictCreationByEmailDomain: 'school.edu' })`."
    },
    {
      name: "loginExpirationInDays",
      type: "Number",
      descr: "Количество дней после логина пользователя, спустя которое его токен будет инвалидирован и он будет разлогинен. По-умолчанию равняется 90. Укажите `null`, чтобы отключить срок действия логина."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Клиент",
  descr: ["Настраивает поведение [пользовательского интерфейса системы учетных записей](#accountsui)."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "Список [разрешений](#requestpermissions), запрашиваемых у пользователя для каждого стороннего логин-сервиса."
    },
    {
      name: "requestOfflineToken",
      type: "Object",
      descr: "Чтобы запросить у пользователя разрешение действовать от его имени, когда он не в сети, присвойте свойству объекта, соответствующему названию сервиса, значение `true`. В данный момент поддерживается только сервис Google. Дополнительную информацию можно найти в документации к [Meteor.loginWithExternalService](#meteor_loginwithexternalservice)."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "Указывает поля, которые будут показаны в форме создания пользователя. Значением должна быть одна из следующих строк: '`USERNAME_AND_EMAIL`', '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`' или '`EMAIL_ONLY`' (по-умолчанию)."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Сервер",
  descr: ["Устанавливает ограничения на создание нового пользователя."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Вызывается при попытке создания нового пользователя. Принимает объект, описывающий нового пользователя. Верните `true`, если его создание разрешено, или `false` в противном случае."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Сервер",
  descr: ["Расширяет процесс создания нового пользователя."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Вызывается при попытке создания нового пользователя. Верните новый объект, описывающий пользователя, или возбудите исключение, чтобы отменить его создание."
    }
  ]
};


Template.api.accounts_validateLoginAttempt = {
  id: "accounts_validateloginattempt",
  name: "Accounts.validateLoginAttempt(func)",
  locus: "Сервер",
  descr: ["Проверяет попытки логина."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Вызывается при попытке логина (успешной или нет). Чтобы запретить ее, нужно либо вернуть ложное значение, либо возбудить исключение."
    }
  ]
};

Template.api.accounts_onLogin = {
  id: "accounts_onlogin",
  name: "Accounts.onLogin(func) и Accounts.onLoginFailure(func)",
  locus: "Сервер",
  descr: ["Регистрирует колбэк, который будет вызван после попытки логина."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Колбэк, вызываемый после попытки логина."
    }
  ]
};

Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Везде",
  descr: ["Создает нового пользователя."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Только на клиенте, необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "Уникальное имя пользователя."
    },
    {
      name: "email",
      type: "String",
      descr: "Email-адрес пользователя."
    },
    {
      name: "password",
      type: "String",
      descr: "Пароль пользователя. __Не__ отсылается по сети в голом виде."
    },
    {
      name: "profile",
      type: "Object",
      descr: "Профиль пользователя, обычно содержащий поле `name`."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Клиент",
  descr: ["Меняет пароль текущего пользователя. Пользователь должен быть залогинен."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "Текущий пароль пользователя. __Не__ отсылается по сети в голом виде."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Новый пароль пользователя. __Не__ отсылается по сети в голом виде."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Клиент",
  descr: ["Отсылает email со ссылкой для сброса пароля."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "Email-адрес, на который будет отправлено письмо со ссылкой на сброс пароля."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Клиент",
  descr: ["Сбрасывает пароль пользователя при помощи токена, полученного по email. После этого логинит пользователя."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "Токен, полученный из ссылки для сброса пароля."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Новый пароль пользователя. __Не__ отсылается по сети в голом виде."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Сервер",
  descr: ["Принудительно меняет пароль пользователя."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "ID пользователя."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "Новый пароль пользователя."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Клиент",
  descr: ["Помечает email-адрес пользователя, как подтвержденный. После этого логинит пользователя."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "Токен, полученный из ссылки для подтверждения email-адреса."
    },
    {
      name: "callback",
      type: "Function",
      descr: "Необязательный колбэк. Вызывется без аргументов в случае успеха, или с единственным аргументом `Error` в случае неудачи."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Сервер",
  descr: ["Отправляет письмо со ссылкой для сброса пароля пользователя."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "ID пользователя, которому необходимо отправить письмо."
    },
    {
      name: "email",
      type: "String",
      descr: "Необязательный аргумент. Email-адрес пользователя, на который следует отправить письмо. Данный адрес должен находиться в списке email-адресов пользователя, хранящихся в поле `emails` его учетной записи. По-умолчанию письмо отсылается на первый адрес из этого списка."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Сервер",
  descr: ["Отправляет письмо со ссылкой, пройдя по которой пользователь может установить себе начальный пароль."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "ID пользователя, которому необходимо отправить письмо."
    },
    {
      name: "email",
      type: "String",
      descr: "Необязательный аргумент. Email-адрес пользователя, на который следует отправить письмо. Данный адрес должен находиться в списке email-адресов пользователя, хранящихся в поле `emails` его учетной записи. По-умолчанию письмо отсылается на первый адрес из этого списка."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Сервер",
  descr: ["Отправляет письмо со ссылкой, пройдя по которой пользователь может подтвердить данный email-адрес."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "ID пользователя, которому необходимо отправить письмо."
    },
    {
      name: "email",
      type: "String",
      descr: "Необязательный аргумент. Email-адрес пользователя, на который следует отправить письмо. Данный адрес должен находиться в списке email-адресов пользователя, хранящихся в поле `emails` его учетной записи. По-умолчанию письмо отсылается на первый адрес из этого списка."
    }
  ]
};



Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Везде",
  descr: ["Объект, служащий для настройки писем, отсылаемых системой учетных записей."]
};



Template.api.check = {
  id: "check",
  name: "check(value, pattern)",
  locus: "Везде",
  descr: ["Проверяет, что значение соответствует [шаблону](#matchpatterns). Если оно не соответствует, то возбуждает исключение `Match.Error`."],
  args: [
    {
      name: "value",
      type: "Любой",
      descr: "Проверяемое значение."
    },
    {
      name: "pattern",
      type: "Шаблон значения",
      descr: "[Шаблон](#matchpatterns), на соответствие которому будет проверяться значение."
    }
  ]
};

Template.api.match_test = {
  id: "match_test",
  name: "Match.test(value, pattern)",
  locus: "Везде",
  descr: ["Возвращает `true`, если значение соответствует [шаблону](#matchpatterns)."],
  args: [
    {
      name: "value",
      type: "Любое",
      descr: "Проверяемое значение."
    },
    {
      name: "pattern",
      type: "Шаблон значения",
      descr: "[Шаблон](#matchpatterns), на соответствие которому будет проверяться значение."
    }
  ]
};

Template.api.matchpatterns = {
  id: "matchpatterns",
  name: "Шаблоны значений"
};

Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout(func, delay)",
  locus: "Везде",
  descr: ["Вызывает функцию через определенный промежуток времени."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Вызываемая функция."
    },
    {
      name: "delay",
      type: "Number",
      descr: "Промежуток времени в миллисекундах."
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval(func, delay)",
  locus: "Везде",
  descr: ["Многократно вызывает функцию через определенный промежуток времени."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "Вызываемая функция."
    },
    {
      name: "delay",
      type: "Number",
      descr: "Промежуток времени в миллисекундах между вызовами функции."
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout(id)",
  locus: "Везде",
  descr: ["Отменяет вызов функции, запланированный с помощью `Meteor.setTimeout`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "Дескриптор, возвращенный функцией `Meteor.setTimeout`."
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval(id)",
  locus: "Везде",
  descr: ["Отменяет все последующие вызовы функции, запланированные с помощью `Meteor.setInterval`."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "Дескриптор, возвращенный функцией `Meteor.setInterval`."
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Везде",
  descr: ["Construct a Meteor environment variable."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Везде",
  descr: ["Return the current value of an EnvironmentVariable."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Везде",
  descr: ["Run `func` with the `env_var`'s value set to `value`."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "Desired value of the environment variable."},
    {name: "func",
     type: "Function",
     descr: "Function to call"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Везде",
  descr: ["Return a new function that calls `func` with `this` set to `_this`, and with environment variables set to their current values."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Function to wrap"},
    {name: "onException",
     type: "Function",
     descr: "Function to call if `func` throws an exception.  It expects the thrown exception as its single argument."},
    {name: "_this",
     type: "Object",
     descr: "Value of `this` inside `func`."}
  ]
};

// Can't name this '.set', since that's a method on components.
Template.api.session_set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Клиент",
  descr: ["Устанавливает значение переменной сессии. Информирует слушателей, что значение изменилось (при этом будут перерисованы все шаблоны и перезапущены все колбэки [`Deps.autorun`](#deps_autorun), в которых вызывался метод [`Session.get`](#session_get) с данным ключем)."],
  args: [
    {name: "key",
     type: "String",
     descr: "Устанавливаемый ключ, например `selectedItem`"},
    {name: "value",
     type: "EJSON-совместимый объект или undefined",
     descr: "Устанавливаемое значение для ключа `key`"}
  ]
};

Template.api.setDefault = {
  id: "session_set_default",
  name: "Session.setDefault(key, value)",
  locus: "Клиент",
  descr: ["Устанавливает значение переменной сессии, если оно еще не установлено. Во всем остальном работает точно так же, как и [`Session.set`](#session_set)."],
  args: [
    {name: "key",
     type: "String",
     descr: "Устанавливаемый ключ, например `selectedItem`"},
    {name: "value",
     type: "EJSON-совместимый объект или undefined",
     descr: "Устанавливаемое значение для ключа `key`"}
  ]
};

// Can't name this '.get', since that's a method on components.
Template.api.session_get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Клиент",
  descr: ["Получает значение переменной сессии. Если используется в [реактивном контексте](#reactivity), то он будет инвалидирован, как только значение переменной будет изменено при помощи [`Session.set`](#session_set). Возвращает клон хранящегося значения, т.е., если это массив или объект, то изменение возвращенного значения не изменит значение, хранящееся в сессии."],
  args: [
    {name: "key",
     type: "String",
     descr: "Название переменной сессии, значение которой необходимо получить."}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Клиент",
  descr: ["Проверяет, содержит ли переменная сессии указанное значение. Если используется в [реактивном контексте](#reactivity), то он будет инвалидирован при изменении результата сравнения."],
  args: [
    {name: "key",
     type: "String",
     descr: "Название проверяемой переменной сессии"},
    {name: "value",
     type: "String, Number, Boolean, null или undefined",
     descr: "Проверяемое значение"}
  ]
};

Template.api.httpcall = {
  id: "http_call",
  name: "HTTP.call(method, url [, options] [, asyncCallback])",
  locus: "Везде",
  descr: ["Perform an outbound HTTP request."],
  args: [
    {name: "method",
     type: "String",
     descr: 'The HTTP method to use: "`GET`", "`POST`", "`PUT`", or "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: 'The URL to retrieve.'},
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback.  If passed, the method runs asynchronously, instead of synchronously, and calls asyncCallback.  On the client, this callback is required."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "String to use as the HTTP request body."
},
    {name: "data",
     type: "Object",
     descr: "JSON-able object to stringify and use as the HTTP request body. Overwrites `content`."},
    {name: "query",
     type: "String",
     descr: "Query string to go in the URL. Overwrites any query string in `url`."},
    {name: "params",
     type: "Object",
     descr: "Dictionary of request parameters to be encoded and placed in the URL (for GETs) or request body (for POSTs).  If `content` or `data` is specified, `params` will always be placed in the URL."
    },
    {name: "auth",
     type: "String",
     descr: 'HTTP basic authentication string of the form `"username:password"`'},
    {name: "headers",
     type: "Object",
     descr: "Dictionary of strings, headers to add to the HTTP request."},
    {name: "timeout",
     type: "Number",
     descr: "Maximum time in milliseconds to wait for the request before failing.  There is no timeout by default."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "If true, transparently follow HTTP redirects.  Cannot be set to false on the client."}
  ]
};

Template.api.http_get = {
  id: "http_get",
  name: "HTTP.get(url, [options], [asyncCallback])",
  locus: "Везде",
  descr: ["Send an HTTP GET request.  Equivalent to `HTTP.call(\"GET\", ...)`."]
};

Template.api.http_post = {
  id: "http_post",
  name: "HTTP.post(url, [options], [asyncCallback])",
  locus: "Везде",
  descr: ["Send an HTTP POST request.  Equivalent to `HTTP.call(\"POST\", ...)`."]
};

Template.api.http_put = {
  id: "http_put",
  name: "HTTP.put(url, [options], [asyncCallback])",
  locus: "Везде",
  descr: ["Send an HTTP PUT request.  Equivalent to `HTTP.call(\"PUT\", ...)`."]
};

Template.api.http_del = {
  id: "http_del",
  name: "HTTP.del(url, [options], [asyncCallback])",
  locus: "Везде",
  descr: ["Send an HTTP DELETE request.  Equivalent to `HTTP.call(\"DELETE\", ...)`.  (Named `del` to avoid conflict with JavaScript's `delete`.)"]
};


Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Клиент",
  descr: ["Колбэк, вызываемый при отрисовке экземпляра шаблона."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Клиент",
  descr: ["Колбэк, вызываемый при создании экземпляра шаблона."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Клиент",
  descr: ["Колбэк, вызываемый при уничтожении экземпляра шаблона."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Клиент",
  descr: ["Specify event handlers for this template."],
  args: [
    {name: "eventMap",
     type: "Event map",
     type_link: "eventmaps",
     descr: "Event handlers to associate with this template."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Клиент",
  descr: ["Specify template helpers available to this template."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "Dictionary of helper functions by name."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Клиент",
  descr: ["Find all elements matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Клиент",
  descr: ["Find one element matching `selector` in this template instance."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'The CSS selector to match, scoped to the template contents.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Клиент",
  descr: ["The first top-level DOM node in this template instance."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Клиент",
  descr: ["The last top-level DOM node in this template instance."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Клиент",
  descr: ["The data context of this instance's latest invocation."]
};


Template.api.ui_registerhelper = {
  id: "ui_registerhelper",
  name: "UI.registerHelper(name, function)",
  locus: "Клиент",
  descr: ["Defines a [helper function](#template_helpers) which can be used from all templates."],
  args: [
    {name: "name",
     type: "String",
     descr: "The name of the helper function you are defining."
    },
    {name: "function",
     type: "Function",
     descr: "The helper function itself."
    }]
};

Template.api.ui_body = {
  id: "ui_body",
  name: "UI.body",
  locus: "Клиент",
  descr: ["The [component object](#templates_api) representing your `<body>` tag."]
};

Template.api.ui_render = {
  id: "ui_render",
  name: "UI.render(Template.<em>myTemplate</em>)",
  locus: "Клиент",
  descr: ["Executes a template's logic."],
  args: [
    {name: "template",
     type: "Template",
     descr: "The particular template to evaluate."
    }]
};

Template.api.ui_renderwithdata = {
  id: "ui_renderwithdata",
  name: "UI.renderWithData(Template.<em>myTemplate</em>, data)",
  locus: "Клиент",
  descr: ["Executes a template's logic with a data context. Otherwise identical to `UI.render`."],
  args: [
    {name: "template",
     type: "Template",
     descr: "The particular template to evaluate."
    },
    {name: "data",
     type: "Object",
     descr: "The data context that will be used when evaluating the template."
    }]
};

Template.api.ui_insert = {
  id: "ui_insert",
  name: "UI.insert(instantiatedComponent, parentNode[, nextNode])",
  locus: "Клиент",
  descr: ["Inserts an instantiated component into the DOM and calls its [`rendered`](#template_rendered) callback."],
  args: [
    {name: "instantiatedComponent",
     type: "Instantiated component object",
     descr: "The return value from `UI.render` or `UI.renderWithData`."
    },
    {name: "parentNode",
     type: "DOM Node",
     descr: "The node that will be the parent of the rendered template."
    },
    {name: "nextNode",
     type: "DOM Node",
     descr: "If provided, must be a child of <em>parentNode</em>; the template will be inserted before this node. If not provided, the template will be inserted as the last child."
    }]
};



var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Сервер",
  descr: ["Send an email. Throws an `Error` on failure to contact mail " +
          "server or if mail server returns an error."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" address (required)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" address[es]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" address[es]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" address[es]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" address[es]')
    },
    {name: "subject",
     type: "String",
     descr: rfc('"Subject:" line')
    },
    {name: "text",
     type: "String",
     descr: rfc('mail body (plain text)')
    },
    {name: "html",
     type: "String",
     descr: rfc('mail body (HTML)')
    },
    {name: "headers",
     type: "Object",
     descr: rfc('custom headers (dictionary)')
    }
  ]
};

Template.api.assets_getText = {
  id: "assets_getText",
  name: "Assets.getText(assetPath, [asyncCallback])",
  locus: "Сервер",
  descr: ["Retrieve the contents of the static server asset as a UTF8-encoded string."],
  args: [
    {name: "assetPath",
     type: "String",
     descr: "The path of the asset, relative to the application's " +
     "`private` subdirectory."
    },
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback, which is called asynchronously with the error " +
     "or result after the function is complete. If not provided, the function " +
     "runs synchronously."
    }
  ]
};

Template.api.assets_getBinary = {
  id: "assets_getBinary",
  name: "Assets.getBinary(assetPath, [asyncCallback])",
  locus: "Сервер",
  descr: ["Retrieve the contents of the static server asset as an [EJSON Binary](#ejson_new_binary)."],
  args: [
    {name: "assetPath",
     type: "String",
     descr: "The path of the asset, relative to the application's " +
     "`private` subdirectory."
    },
    {name: "asyncCallback",
     type: "Function",
     descr: "Optional callback, which is called asynchronously with the error " +
     "or result after the function is complete. If not provided, the function " +
     "runs synchronously."
    }
  ]
};
