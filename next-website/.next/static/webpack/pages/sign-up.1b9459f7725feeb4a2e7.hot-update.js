"use strict";
self["webpackHotUpdate_N_E"]("pages/sign-up",{

/***/ "./pages/sign-up.js":
/*!**************************!*\
  !*** ./pages/sign-up.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignUp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _media_icons_ospia_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/icons/ospia.svg */ "./media/icons/ospia.svg");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\micae\\OneDrive\\Desktop\\CODE\\root\\next-apollo-materialUI\\next-website\\pages\\sign-up.js",
    _s = $RefreshSig$();














/*
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { StylesContext } from '@material-ui/styles';
*/



function Copyright() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__.default, {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "OSPIA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_c = Copyright;
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    logo: {
      transform: 'scale(0.5)'
    }
  };
});
function SignUp() {
  _s();

  var classes = useStyles();

  var verifyCallback = function verifyCallback(response) {
    console.log(response);
  };

  var callback = function callback() {
    console.log('Done!!!!');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
    component: "main",
    maxWidth: "xs",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: classes.paper,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: classes.logo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_media_icons_ospia_svg__WEBPACK_IMPORTED_MODULE_1__.default, {
          alt: "OSPIA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
        component: "h1",
        variant: "h5",
        children: "Registro de Usuario"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: classes.form,
        noValidate: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              autoComplete: "name",
              name: "firstName",
              variant: "outlined",
              required: true,
              fullWidth: true,
              id: "usuario",
              label: "Nombre y Apellido o Raz\xF3n Social",
              autoFocus: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "outlined",
              required: true,
              fullWidth: true,
              id: "email",
              label: "Correo Electr\xF3nico",
              name: "email",
              autoComplete: "email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__.default, {
              variant: "outlined",
              required: true,
              fullWidth: true,
              name: "password",
              label: "Contrase\xF1a",
              type: "password",
              id: "password",
              autoComplete: "current-password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__.default, {
              sitekey: "6LfG3FkcAAAAAG-ijamNanUtajZwipn_6ACldiIz",
              render: "explicit",
              verifyCallback: verifyCallback,
              onloadCallback: callback
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
          type: "submit",
          fullWidth: true,
          variant: "contained",
          color: "primary",
          className: classes.submit,
          children: "Registrarme"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
          container: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            xs: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__.default, {
              href: "#",
              variant: "body2",
              children: "Recuperar mi contrase\xF1a"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__.default, {
            item: true,
            children: ["Ya tengo cuenta.\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__.default, {
              href: "#",
              variant: "body2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
                children: "Iniciar Sesi\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__.default, {
      mt: 5,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Copyright, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_s(SignUp, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = SignUp;

var _c, _c2;

$RefreshReg$(_c, "Copyright");
$RefreshReg$(_c2, "SignUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "FormProvider": function() { return /* binding */ FormProvider; },
/* harmony export */   "appendErrors": function() { return /* binding */ appendErrors; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "useController": function() { return /* binding */ useController; },
/* harmony export */   "useFieldArray": function() { return /* binding */ useFieldArray; },
/* harmony export */   "useForm": function() { return /* binding */ useForm; },
/* harmony export */   "useFormContext": function() { return /* binding */ useFormContext; },
/* harmony export */   "useFormState": function() { return /* binding */ useFormState; },
/* harmony export */   "useWatch": function() { return /* binding */ useWatch; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isCheckBoxInput = (element) => element.type === 'checkbox';

var isDateObject = (data) => data instanceof Date;

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !isDateObject(value);

var getControllerValue = (event) => isObject(event) && event.target
    ? isCheckBoxInput(event.target)
        ? event.target.checked
        : event.target.value
    : event;

var getNodeParentName = (name) => name.substring(0, name.search(/.\d/)) || name;

var isNameInFieldArray = (names, name) => [...names].some((current) => getNodeParentName(name) === current);

var compact = (value) => value.filter(Boolean);

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    if (isObject(obj) && path) {
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    }
    return undefined;
};

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

var omit = (source, key) => {
    const copy = Object.assign({}, source);
    delete copy[key];
    return copy;
};

const FormContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormContext);
const FormProvider = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider, { value: omit(props, 'children') }, props.children));

var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
    function createGetter(prop) {
        return () => {
            if (prop in formState) {
                if (_proxyFormState[prop] !== VALIDATION_MODE.all) {
                    _proxyFormState[prop] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[prop] = true);
                return formState[prop];
            }
            return undefined;
        };
    }
    const result = {};
    for (const key in formState) {
        Object.defineProperty(result, key, {
            get: createGetter(key),
        });
    }
    return result;
};

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
    const formState = omit(formStateData, 'name');
    return (isEmptyObject(formState) ||
        Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
        Object.keys(formState).find((key) => _proxyFormState[key] ===
            (!isRoot || VALIDATION_MODE.all)));
};

var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];

function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name } = props || {};
    const nameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(control._formState);
    const _localProxyFormState = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    });
    nameRef.current = name;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = control._subjects.state.subscribe({
            next: (formState) => (!nameRef.current ||
                !formState.name ||
                convertToArrayPayload(nameRef.current).includes(formState.name)) &&
                shouldRenderFormState(formState, _localProxyFormState.current) &&
                updateFormState(Object.assign(Object.assign({}, control._formState), formState)),
        });
        disabled && formStateSubscription.unsubscribe();
        return () => formStateSubscription.unsubscribe();
    }, [disabled, control]);
    return getProxyFormState(formState, control._proxyFormState, _localProxyFormState.current, false);
}

var isKey = (value) => /^\w*$/.test(value);

var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

function useController(props) {
    const methods = useFormContext();
    const { name, control = methods.control, shouldUnregister } = props;
    const [value, setInputStateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)));
    set(control._formValues, name, value);
    const formState = useFormState({
        control: control || methods.control,
        name,
    });
    const registerProps = control.register(name, Object.assign(Object.assign({}, props.rules), { value }));
    const updateMounted = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((name, value) => {
        const field = get(control._fields, name);
        if (field) {
            field._f.mount = value;
        }
    }, [control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const controllerSubscription = control._subjects.control.subscribe({
            next: (data) => (!data.name || name === data.name) &&
                setInputStateValue(get(data.values, name)),
        });
        updateMounted(name, true);
        return () => {
            controllerSubscription.unsubscribe();
            const _shouldUnregisterField = control._shouldUnregister || shouldUnregister;
            if (isNameInFieldArray(control._names.array, name)
                ? _shouldUnregisterField && !control._isInAction
                : _shouldUnregisterField) {
                control.unregister(name);
            }
            else {
                updateMounted(name, false);
            }
        };
    }, [name, control, shouldUnregister, updateMounted]);
    return {
        field: {
            onChange: (event) => {
                const value = getControllerValue(event);
                setInputStateValue(value);
                registerProps.onChange({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.CHANGE,
                });
            },
            onBlur: () => {
                registerProps.onBlur({
                    target: {
                        value,
                        name: name,
                    },
                    type: EVENTS.BLUR,
                });
            },
            name,
            value,
            ref: (elm) => {
                const field = get(control._fields, name);
                if (elm && field && elm.focus) {
                    field._f.ref = {
                        focus: () => elm.focus(),
                        setCustomValidity: (message) => elm.setCustomValidity(message),
                        reportValidity: () => elm.reportValidity(),
                    };
                }
            },
        },
        formState,
        fieldState: {
            invalid: !!get(formState.errors, name),
            isDirty: !!get(formState.dirtyFields, name),
            isTouched: !!get(formState.touchedFields, name),
            error: get(formState.errors, name),
        },
    };
}

const Controller = (props) => props.render(useController(props));

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

const focusFieldBy = (fields, callback, fieldsNames) => {
    for (const key of fieldsNames || Object.keys(fields)) {
        const field = get(fields, key);
        if (field) {
            const _f = field._f;
            const current = omit(field, '_f');
            if (_f && callback(_f.name)) {
                if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                    break;
                }
                else if (_f.refs) {
                    _f.refs[0].focus();
                    break;
                }
            }
            else if (isObject(current)) {
                focusFieldBy(current, callback);
            }
        }
    }
};

var getFocusFieldName = (name, index, options) => options && !options.shouldFocus
    ? options.focusName || `${name}.${options.focusIndex}.`
    : `${name}.${index}.`;

var mapCurrentIds = (values, _fieldIds, keyName) => values.map((value, index) => {
    const output = _fieldIds.current[index];
    return Object.assign(Object.assign({}, value), (output ? { [keyName]: output[keyName] } : {}));
});

var generateId = () => {
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

var mapIds = (values = [], keyName) => values.map((value) => (Object.assign(Object.assign({}, (value[keyName] ? {} : { [keyName]: generateId() })), value)));

function append(data, value) {
    return [...convertToArrayPayload(data), ...convertToArrayPayload(value)];
}

var fillEmptyArray = (value) => Array.isArray(value) ? value.map(() => undefined) : undefined;

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value),
        ...data.slice(index),
    ];
}

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

function prepend(data, value) {
    return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));

var swapArrayAt = (data, indexA, indexB) => {
    data[indexA] = [data[indexB], (data[indexB] = data[indexA])][0];
};

var updateAt = (fieldValues, index, value) => {
    fieldValues[index] = value;
    return fieldValues;
};

const useFieldArray = (props) => {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, } = props;
    const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_0__.useState(mapIds(control._getFieldArrayValue(name), keyName));
    const _fieldIds = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fields);
    _fieldIds.current = fields;
    control._names.array.add(name);
    const append$1 = (value, options) => {
        const appendValue = convertToArrayPayload(value);
        const updatedFieldArrayValuesWithKey = append(mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName), mapIds(convertToArrayPayload(value), keyName));
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, append, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValuesWithKey);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValuesWithKey.length - appendValue.length, options);
    };
    const prepend$1 = (value, options) => {
        const updatedFieldArrayValuesWithKey = prepend(mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName), mapIds(convertToArrayPayload(value), keyName));
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, prepend, {
            argA: fillEmptyArray(value),
        }, updatedFieldArrayValuesWithKey);
        control._names.focus = getFocusFieldName(name, 0, options);
    };
    const remove = (index) => {
        const updatedFieldArrayValuesWithKey = removeArrayAt(mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName), index);
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, removeArrayAt, {
            argA: index,
        }, updatedFieldArrayValuesWithKey);
    };
    const insert$1 = (index, value, options) => {
        const updatedFieldArrayValuesWithKey = insert(mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName), index, mapIds(convertToArrayPayload(value), keyName));
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, insert, {
            argA: index,
            argB: fillEmptyArray(value),
        }, updatedFieldArrayValuesWithKey);
        control._names.focus = getFocusFieldName(name, index, options);
    };
    const swap = (indexA, indexB) => {
        const updatedFieldArrayValuesWithKey = mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName);
        swapArrayAt(updatedFieldArrayValuesWithKey, indexA, indexB);
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, swapArrayAt, {
            argA: indexA,
            argB: indexB,
        }, updatedFieldArrayValuesWithKey, false);
    };
    const move = (from, to) => {
        const updatedFieldArrayValuesWithKey = mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName);
        moveArrayAt(updatedFieldArrayValuesWithKey, from, to);
        setFields(updatedFieldArrayValuesWithKey);
        control._updateFieldArray(keyName, name, moveArrayAt, {
            argA: from,
            argB: to,
        }, updatedFieldArrayValuesWithKey, false);
    };
    const update = (index, value) => {
        const updatedFieldArrayValuesWithKey = mapCurrentIds(control._getFieldArrayValue(name), _fieldIds, keyName);
        const updatedFieldArrayValues = updateAt(updatedFieldArrayValuesWithKey, index, value);
        _fieldIds.current = mapIds(updatedFieldArrayValues, keyName);
        setFields(_fieldIds.current);
        control._updateFieldArray(keyName, name, updateAt, {
            argA: index,
            argB: value,
        }, updatedFieldArrayValuesWithKey, true, false);
    };
    const replace = (value) => {
        const values = mapIds(convertToArrayPayload(value), keyName);
        setFields(values);
        control._updateFieldArray(keyName, name, () => values, {}, values, true, false);
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._isInAction = false;
        if (control._names.watchAll) {
            control._subjects.state.next({});
        }
        else {
            for (const watchField of control._names.watch) {
                if (name.startsWith(watchField)) {
                    control._subjects.state.next({});
                    break;
                }
            }
        }
        control._subjects.watch.next({
            name,
            values: control._formValues,
        });
        control._names.focus &&
            focusFieldBy(control._fields, (key) => key.startsWith(control._names.focus));
        control._names.focus = '';
        control._proxyFormState.isValid && control._updateValid();
    }, [fields, name, control, keyName]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const fieldArraySubscription = control._subjects.array.subscribe({
            next({ values, name: fieldArrayName }) {
                if (fieldArrayName === name || !fieldArrayName) {
                    setFields(mapIds(get(values, name), keyName));
                }
            },
        });
        !get(control._formValues, name) && set(control._formValues, name, []);
        return () => {
            fieldArraySubscription.unsubscribe();
            if (control._shouldUnregister || shouldUnregister) {
                control.unregister(name);
            }
        };
    }, [name, control, keyName, shouldUnregister]);
    return {
        swap: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(swap, [name, control, keyName]),
        move: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(move, [name, control, keyName]),
        prepend: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(prepend$1, [name, control, keyName]),
        append: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(append$1, [name, control, keyName]),
        remove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(remove, [name, control, keyName]),
        insert: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(insert$1, [name, control, keyName]),
        update: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(update, [name, control, keyName]),
        replace: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(replace, [name, control, keyName]),
        fields: fields,
    };
};

function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    if (data instanceof Date) {
        copy = new Date(data.getTime());
    }
    else if (isArray || isObject(data)) {
        copy = isArray ? [] : {};
        for (const key in data) {
            copy[key] = cloneObject(data[key]);
        }
    }
    else {
        return data;
    }
    return copy;
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepEqual(object1, object2) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        isDateObject(object1) ||
        isDateObject(object2)) {
        return object1 === object2;
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if ((isObject(val1) || Array.isArray(val1)) &&
                (isObject(val2) || Array.isArray(val2))
                ? !deepEqual(val1, val2)
                : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}

var getValidationModes = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isBoolean = (value) => typeof value === 'boolean';

var isFileInput = (element) => element.type === 'file';

var isFunction = (value) => typeof value === 'function';

var isHTMLElement = (value) => value instanceof HTMLElement;

var isMultipleSelect = (element) => element.type === `select-multiple`;

var isRadioInput = (element) => element.type === 'radio';

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

var isString = (value) => typeof value === 'string';

var isWeb = typeof window !== 'undefined' &&
    typeof window.HTMLElement !== 'undefined' &&
    typeof document !== 'undefined';

var live = (ref) => !isHTMLElement(ref) || !document.contains(ref);

var omitKey = (fields, keyName) => fields.map((field = {}) => omit(field, keyName));

class Subscription {
    constructor() {
        this.tearDowns = [];
    }
    add(tearDown) {
        this.tearDowns.push(tearDown);
    }
    unsubscribe() {
        for (const teardown of this.tearDowns) {
            teardown();
        }
        this.tearDowns = [];
    }
}
class Subscriber {
    constructor(observer, subscription) {
        this.observer = observer;
        this.closed = false;
        subscription.add(() => (this.closed = true));
    }
    next(value) {
        if (!this.closed) {
            this.observer.next(value);
        }
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    next(value) {
        for (const observer of this.observers) {
            observer.next(value);
        }
    }
    subscribe(observer) {
        const subscription = new Subscription();
        const subscriber = new Subscriber(observer, subscription);
        this.observers.push(subscriber);
        return subscription;
    }
    unsubscribe() {
        this.observers = [];
    }
}

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.checked && !option.disabled)
                .map((option) => option.value);
            return { value: values, isValid: !!values.length };
        }
        return options[0].checked && !options[0].disabled
            ? // @ts-expect-error expected to work in the browser
                options[0].attributes && !isUndefined(options[0].attributes.value)
                    ? isUndefined(options[0].value) || options[0].value === ''
                        ? validResult
                        : { value: options[0].value, isValid: true }
                    : validResult
            : defaultResult;
    }
    return defaultResult;
};

var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
    ? value
    : valueAsNumber
        ? value === ''
            ? NaN
            : +value
        : valueAsDate
            ? new Date(value)
            : setValueAs
                ? setValueAs(value)
                : value;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

const defaultReturn = {
    isValid: false,
    value: null,
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.checked && !option.disabled
        ? {
            isValid: true,
            value: option.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

function getFieldValue(_f) {
    const ref = _f.ref;
    if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
        return;
    }
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return getMultipleSelectValue(ref.options);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}

var getResolverOptions = (fieldsNames, _fieldss, criteriaMode, shouldUseNativeValidation) => {
    const fields = {};
    for (const name of fieldsNames) {
        const field = get(_fieldss, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [...fieldsNames],
        fields,
        shouldUseNativeValidation,
    };
};

var hasValidation = (options) => options.mount &&
    (options.required ||
        options.min ||
        options.max ||
        options.maxLength ||
        options.minLength ||
        options.pattern ||
        options.validate);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                !isNullOrUndefined(defaultValues) &&
                    deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
    if (mode.isOnAll) {
        return false;
    }
    else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var unsetEmptyArray = (ref, name) => !compact(get(ref, name, [])).length && unset(ref, name);

var isMessage = (value) => isString(value) || react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(value);

var isRegex = (value) => value instanceof RegExp;

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) ||
        (Array.isArray(result) && result.every(isMessage)) ||
        (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
    if (!mount || disabled) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidty = (message) => {
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
        inputValue === '' ||
        (Array.isArray(inputValue) && !inputValue.length);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, appendErrorsCurry(exceedMax ? maxType : minType, message));
    };
    if (required &&
        ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
            (isBoolean(inputValue) && !inputValue) ||
            (isCheckBox && !getCheckboxValue(refs).isValid) ||
            (isRadio && !getRadioValue(refs).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: inputRef }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || parseFloat(inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            inputValue.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            inputValue.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidty(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                setCustomValidty(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    setCustomValidty(validateError.message);
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const key in validate) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    setCustomValidty(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: inputRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidty(true);
    return error;
};

const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true,
};
const isWindowUndefined = typeof window === 'undefined';
function createFormControl(props = {}) {
    let formOptions = Object.assign(Object.assign({}, defaultOptions), props);
    let _delayCallback;
    let _formState = {
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    };
    let _fields = {};
    let _formValues = {};
    let _defaultValues = formOptions.defaultValues || {};
    let _isInAction = false;
    let _isMounted = false;
    let _timer = 0;
    let _names = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
    };
    let _validateCount = {};
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false,
    };
    const _subjects = {
        watch: new Subject(),
        control: new Subject(),
        array: new Subject(),
        state: new Subject(),
    };
    const validationMode = getValidationModes(formOptions.mode);
    const reValidateMode = getValidationModes(formOptions.reValidateMode);
    const isValidateAllFieldCriteria = formOptions.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback, wait) => (...args) => {
        clearTimeout(_timer);
        _timer = window.setTimeout(() => callback(...args), wait);
    };
    const isFieldWatched = (name) => _names.watchAll ||
        _names.watch.has(name) ||
        _names.watch.has((name.match(/\w+/) || [])[0]);
    const updateErrorState = (name, error) => {
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const shouldRenderBaseOnError = async (shouldSkipRender, name, isValid, error, fieldState) => {
        const previousError = get(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
        if (props.delayError && error) {
            _delayCallback =
                _delayCallback || debounce(updateErrorState, props.delayError);
            _delayCallback(name, error);
        }
        else {
            clearTimeout(_timer);
            error
                ? set(_formState.errors, name, error)
                : unset(_formState.errors, name);
        }
        if (((error ? !deepEqual(previousError, error) : previousError) ||
            !isEmptyObject(fieldState) ||
            shouldUpdateValid) &&
            !shouldSkipRender) {
            const updatedFormState = Object.assign(Object.assign(Object.assign({}, fieldState), (shouldUpdateValid ? { isValid } : {})), { errors: _formState.errors, name });
            _formState = Object.assign(Object.assign({}, _formState), updatedFormState);
            _subjects.state.next(updatedFormState);
        }
        _validateCount[name]--;
        if (_proxyFormState.isValidating && !_validateCount[name]) {
            _subjects.state.next({
                isValidating: false,
            });
            _validateCount = {};
        }
    };
    const setFieldValue = (name, value, options = {}, shouldRender) => {
        const field = get(_fields, name);
        if (field) {
            const _f = field._f;
            if (_f) {
                set(_formValues, name, getFieldValueAs(value, _f));
                const fieldValue = isWeb && isHTMLElement(_f.ref) && isNullOrUndefined(value)
                    ? ''
                    : value;
                if (isFileInput(_f.ref) && !isString(fieldValue)) {
                    _f.ref.files = fieldValue;
                }
                else if (isMultipleSelect(_f.ref)) {
                    [..._f.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));
                }
                else if (_f.refs) {
                    if (isCheckBoxInput(_f.ref)) {
                        _f.refs.length > 1
                            ? _f.refs.forEach((checkboxRef) => (checkboxRef.checked = Array.isArray(fieldValue)
                                ? !!fieldValue.find((data) => data === checkboxRef.value)
                                : fieldValue === checkboxRef.value))
                            : (_f.refs[0].checked = !!fieldValue);
                    }
                    else {
                        _f.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                    }
                }
                else {
                    _f.ref.value = fieldValue;
                }
                if (shouldRender) {
                    _subjects.control.next({
                        values: getValues(),
                        name,
                    });
                }
                (options.shouldDirty || options.shouldTouch) &&
                    updateTouchAndDirtyState(name, fieldValue, options.shouldTouch);
                options.shouldValidate && trigger(name);
            }
        }
    };
    const updateTouchAndDirtyState = (name, inputValue, isCurrentTouched, shouldRender = true) => {
        const state = {
            name,
        };
        let isChanged = false;
        if (_proxyFormState.isDirty) {
            const previousIsDirty = _formState.isDirty;
            _formState.isDirty = _getIsDirty();
            state.isDirty = _formState.isDirty;
            isChanged = previousIsDirty !== state.isDirty;
        }
        if (_proxyFormState.dirtyFields && !isCurrentTouched) {
            const isPreviousFieldDirty = get(_formState.dirtyFields, name);
            const isCurrentFieldDirty = !deepEqual(get(_defaultValues, name), inputValue);
            isCurrentFieldDirty
                ? set(_formState.dirtyFields, name, true)
                : unset(_formState.dirtyFields, name);
            state.dirtyFields = _formState.dirtyFields;
            isChanged =
                isChanged || isPreviousFieldDirty !== get(_formState.dirtyFields, name);
        }
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (isCurrentTouched && !isPreviousFieldTouched) {
            set(_formState.touchedFields, name, isCurrentTouched);
            state.touchedFields = _formState.touchedFields;
            isChanged =
                isChanged ||
                    (_proxyFormState.touchedFields &&
                        isPreviousFieldTouched !== isCurrentTouched);
        }
        isChanged && shouldRender && _subjects.state.next(state);
        return isChanged ? state : {};
    };
    const executeResolver = async (name) => {
        return formOptions.resolver
            ? await formOptions.resolver(Object.assign({}, _formValues), formOptions.context, getResolverOptions(name || _names.mount, _fields, formOptions.criteriaMode, formOptions.shouldUseNativeValidation))
            : {};
    };
    const executeResolverValidation = async (names) => {
        const { errors } = await executeResolver();
        if (names) {
            for (const name of names) {
                const error = get(errors, name);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
        }
        else {
            _formState.errors = errors;
        }
        return errors;
    };
    const validateForm = async (_fields, shouldCheckValid, context = {
        valid: true,
    }) => {
        for (const name in _fields) {
            const field = _fields[name];
            if (field) {
                const _f = field._f;
                const fieldValue = omit(field, '_f');
                if (_f) {
                    const fieldError = await validateField(field, get(_formValues, _f.name), isValidateAllFieldCriteria, formOptions.shouldUseNativeValidation);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldCheckValid) {
                            break;
                        }
                    }
                    if (!shouldCheckValid) {
                        fieldError[_f.name]
                            ? set(_formState.errors, _f.name, fieldError[_f.name])
                            : unset(_formState.errors, _f.name);
                    }
                }
                fieldValue &&
                    (await validateForm(fieldValue, shouldCheckValid, context));
            }
        }
        return context.valid;
    };
    const handleChange = async ({ type, target, target: { value, name, type: inputType }, }) => {
        const field = get(_fields, name);
        if (field) {
            let error;
            let isValid;
            const inputValue = inputType ? getFieldValue(field._f) : value;
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = (!hasValidation(field._f) &&
                !formOptions.resolver &&
                !get(_formState.errors, name) &&
                !field._f.deps) ||
                skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, reValidateMode, validationMode);
            const isWatched = !isBlurEvent && isFieldWatched(name);
            set(_formValues, name, inputValue);
            const fieldState = updateTouchAndDirtyState(name, inputValue, isBlurEvent, false);
            const shouldRender = !isEmptyObject(fieldState) || isWatched;
            !isBlurEvent &&
                _subjects.watch.next({
                    name,
                    type,
                });
            if (shouldSkipValidation) {
                return (shouldRender &&
                    _subjects.state.next(Object.assign({ name }, (isWatched ? {} : fieldState))));
            }
            !isBlurEvent && isWatched && _subjects.state.next({});
            _validateCount[name] = _validateCount[name] ? +1 : 1;
            _proxyFormState.isValidating &&
                _subjects.state.next({
                    isValidating: true,
                });
            if (formOptions.resolver) {
                const { errors } = await executeResolver([name]);
                error = get(errors, name);
                if (isCheckBoxInput(target) && !error) {
                    const parentNodeName = getNodeParentName(name);
                    const parentField = get(_fields, parentNodeName);
                    if (Array.isArray(parentField) &&
                        parentField.every((field) => field._f && isCheckBoxInput(field._f.ref))) {
                        const parentError = get(errors, parentNodeName, {});
                        parentError.type && (error = parentError);
                        name = parentNodeName;
                    }
                }
                isValid = isEmptyObject(errors);
            }
            else {
                error = (await validateField(field, get(_formValues, name), isValidateAllFieldCriteria, formOptions.shouldUseNativeValidation))[name];
                isValid = await _updateValid(true);
            }
            if (field._f.deps) {
                trigger(field._f.deps);
            }
            shouldRenderBaseOnError(false, name, isValid, error, fieldState);
        }
    };
    const _updateValidAndInputValue = (name, ref, shouldSkipValueAs) => {
        const field = get(_fields, name);
        if (field) {
            const fieldValue = get(_formValues, name);
            const defaultValue = isUndefined(fieldValue)
                ? get(_defaultValues, name)
                : fieldValue;
            if (isUndefined(defaultValue) ||
                (ref && ref.defaultChecked) ||
                shouldSkipValueAs) {
                set(_formValues, name, shouldSkipValueAs ? defaultValue : getFieldValue(field._f));
            }
            else {
                setFieldValue(name, defaultValue);
            }
        }
        _isMounted && _updateValid();
    };
    const _getIsDirty = (name, data) => {
        name && data && set(_formValues, name, data);
        return !deepEqual(Object.assign({}, getValues()), _defaultValues);
    };
    const _updateValid = async (skipRender) => {
        let isValid = false;
        if (_proxyFormState.isValid) {
            isValid = formOptions.resolver
                ? isEmptyObject((await executeResolver()).errors)
                : await validateForm(_fields, true);
            if (!skipRender && isValid !== _formState.isValid) {
                _formState.isValid = isValid;
                _subjects.state.next({
                    isValid,
                });
            }
        }
        return isValid;
    };
    const setValues = (name, value, options) => Object.entries(value).forEach(([fieldKey, fieldValue]) => {
        const fieldName = `${name}.${fieldKey}`;
        const field = get(_fields, fieldName);
        (_names.array.has(name) ||
            !isPrimitive(fieldValue) ||
            (field && !field._f)) &&
            !isDateObject(fieldValue)
            ? setValues(fieldName, fieldValue, options)
            : setFieldValue(fieldName, fieldValue, options, true);
    });
    const _getWatch = (fieldNames, defaultValue, isMounted, isGlobal) => {
        const fieldValues = Object.assign({}, (isMounted || _isMounted
            ? _formValues
            : isUndefined(defaultValue)
                ? _defaultValues
                : isString(fieldNames)
                    ? { [fieldNames]: defaultValue }
                    : defaultValue));
        if (!fieldNames) {
            isGlobal && (_names.watchAll = true);
            return fieldValues;
        }
        const result = [];
        for (const fieldName of convertToArrayPayload(fieldNames)) {
            isGlobal && _names.watch.add(fieldName);
            result.push(get(fieldValues, fieldName));
        }
        return Array.isArray(fieldNames) ? result : result[0];
    };
    const _updateValues = (defaultValues, name = '') => {
        for (const key in defaultValues) {
            const value = defaultValues[key];
            const fieldName = name + (name ? '.' : '') + key;
            const field = get(_fields, fieldName);
            if (!field || !field._f) {
                if ((isObject(value) && Object.keys(value).length) ||
                    (Array.isArray(value) && value.length)) {
                    _updateValues(value, fieldName);
                }
                else if (!field) {
                    set(_formValues, fieldName, value);
                }
            }
        }
    };
    const _updateFieldArray = (keyName, name, method, args, updatedFieldArrayValuesWithKey = [], shouldSet = true, shouldSetFields = true) => {
        let output;
        const updatedFieldArrayValues = omitKey(updatedFieldArrayValuesWithKey, keyName);
        _isInAction = true;
        if (shouldSetFields && get(_fields, name)) {
            output = method(get(_fields, name), args.argA, args.argB);
            shouldSet && set(_fields, name, output);
        }
        output = method(get(_formValues, name), args.argA, args.argB);
        shouldSet && set(_formValues, name, output);
        if (Array.isArray(get(_formState.errors, name))) {
            const output = method(get(_formState.errors, name), args.argA, args.argB);
            shouldSet && set(_formState.errors, name, output);
            unsetEmptyArray(_formState.errors, name);
        }
        if (_proxyFormState.touchedFields && get(_formState.touchedFields, name)) {
            const output = method(get(_formState.touchedFields, name), args.argA, args.argB);
            shouldSet && set(_formState.touchedFields, name, output);
            unsetEmptyArray(_formState.touchedFields, name);
        }
        if (_proxyFormState.dirtyFields || _proxyFormState.isDirty) {
            set(_formState.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues, keyName), get(_defaultValues, name, []), get(_formState.dirtyFields, name, [])));
            updatedFieldArrayValues &&
                set(_formState.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues, keyName), get(_defaultValues, name, []), get(_formState.dirtyFields, name, [])));
            unsetEmptyArray(_formState.dirtyFields, name);
        }
        _subjects.state.next({
            isDirty: _getIsDirty(name, omitKey(updatedFieldArrayValues, keyName)),
            dirtyFields: _formState.dirtyFields,
            errors: _formState.errors,
            isValid: _formState.isValid,
        });
    };
    const _getFieldArrayValue = (name) => get(_isMounted ? _formValues : _defaultValues, name, []);
    const setValue = (name, value, options = {}) => {
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        set(_formValues, name, value);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: _formValues,
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                options.shouldDirty) {
                set(_formState.dirtyFields, name, setFieldArrayDirtyFields(value, get(_defaultValues, name, []), get(_formState.dirtyFields, name, [])));
                _subjects.state.next({
                    name,
                    dirtyFields: _formState.dirtyFields,
                    isDirty: _getIsDirty(name, value),
                });
            }
        }
        else {
            field && !field._f && !isNullOrUndefined(value)
                ? setValues(name, value, options)
                : setFieldValue(name, value, options, true);
        }
        isFieldWatched(name) && _subjects.state.next({});
        _subjects.watch.next({
            name,
        });
    };
    const trigger = async (name, options = {}) => {
        const fieldNames = convertToArrayPayload(name);
        let isValid;
        _subjects.state.next({
            isValidating: true,
        });
        if (formOptions.resolver) {
            const schemaResult = await executeResolverValidation(isUndefined(name) ? name : fieldNames);
            isValid = name
                ? fieldNames.every((name) => !get(schemaResult, name))
                : isEmptyObject(schemaResult);
        }
        else {
            if (name) {
                isValid = (await Promise.all(fieldNames.map(async (fieldName) => {
                    const field = get(_fields, fieldName);
                    return await validateForm(field._f ? { [fieldName]: field } : field);
                }))).every(Boolean);
                _updateValid();
            }
            else {
                isValid = await validateForm(_fields);
            }
        }
        _subjects.state.next(Object.assign(Object.assign({}, (isString(name) ? { name } : {})), { errors: _formState.errors, isValid, isValidating: false }));
        if (options.shouldFocus && !isValid) {
            focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
        }
        return isValid;
    };
    const getValues = (fieldNames) => {
        const values = Object.assign(Object.assign({}, _defaultValues), _formValues);
        return isUndefined(fieldNames)
            ? values
            : isString(fieldNames)
                ? get(values, fieldNames)
                : fieldNames.map((name) => get(values, name));
    };
    const clearErrors = (name) => {
        name
            ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))
            : (_formState.errors = {});
        _subjects.state.next({
            errors: _formState.errors,
        });
    };
    const setError = (name, error, options) => {
        const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
        set(_formState.errors, name, Object.assign(Object.assign({}, error), { ref }));
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false,
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (fieldName, defaultValue) => isFunction(fieldName)
        ? _subjects.watch.subscribe({
            next: (info) => fieldName(_getWatch(undefined, defaultValue), info),
        })
        : _getWatch(fieldName, defaultValue, false, true);
    const unregister = (name, options = {}) => {
        for (const inputName of name ? convertToArrayPayload(name) : _names.mount) {
            _names.mount.delete(inputName);
            _names.array.delete(inputName);
            if (get(_fields, inputName)) {
                if (!options.keepValue) {
                    unset(_fields, inputName);
                    unset(_formValues, inputName);
                }
                !options.keepError && unset(_formState.errors, inputName);
                !options.keepDirty && unset(_formState.dirtyFields, inputName);
                !options.keepTouched && unset(_formState.touchedFields, inputName);
                !formOptions.shouldUnregister &&
                    !options.keepDefaultValue &&
                    unset(_defaultValues, inputName);
            }
        }
        _subjects.watch.next({});
        _subjects.state.next(Object.assign(Object.assign({}, _formState), (!options.keepDirty ? {} : { isDirty: _getIsDirty() })));
        !options.keepIsValid && _updateValid();
    };
    const registerFieldRef = (name, fieldRef, options) => {
        register(name, options);
        let field = get(_fields, name);
        const ref = isUndefined(fieldRef.value)
            ? fieldRef.querySelectorAll
                ? fieldRef.querySelectorAll('input,select,textarea')[0] ||
                    fieldRef
                : fieldRef
            : fieldRef;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        if (ref === field._f.ref ||
            (isRadioOrCheckbox &&
                compact(field._f.refs || []).find((option) => option === ref))) {
            return;
        }
        field = {
            _f: isRadioOrCheckbox
                ? Object.assign(Object.assign({}, field._f), { refs: [
                        ...compact(field._f.refs || []).filter((ref) => isHTMLElement(ref) && document.contains(ref)),
                        ref,
                    ], ref: { type: ref.type, name } }) : Object.assign(Object.assign({}, field._f), { ref }),
        };
        set(_fields, name, field);
        (!options || !options.disabled) && _updateValidAndInputValue(name, ref);
    };
    const register = (name, options = {}) => {
        const field = get(_fields, name);
        set(_fields, name, {
            _f: Object.assign(Object.assign(Object.assign({}, (field && field._f ? field._f : { ref: { name } })), { name, mount: true }), options),
        });
        if (options.value) {
            set(_formValues, name, options.value);
        }
        if (isBoolean(options.disabled) && field) {
            set(_formValues, name, options.disabled
                ? undefined
                : get(_formValues, name, getFieldValue(field._f)));
        }
        _names.mount.add(name);
        !field && _updateValidAndInputValue(name, undefined, true);
        return isWindowUndefined
            ? { name: name }
            : Object.assign(Object.assign({ name }, (isUndefined(options.disabled)
                ? {}
                : { disabled: options.disabled })), { onChange: handleChange, onBlur: handleChange, ref: (ref) => {
                    if (ref) {
                        registerFieldRef(name, ref, options);
                    }
                    else {
                        const field = get(_fields, name, {});
                        const _shouldUnregister = formOptions.shouldUnregister || options.shouldUnregister;
                        if (field._f) {
                            field._f.mount = false;
                        }
                        _shouldUnregister &&
                            !(isNameInFieldArray(_names.array, name) && _isInAction) &&
                            _names.unMount.add(name);
                    }
                } });
    };
    const handleSubmit = (onValid, onInvalid) => async (e) => {
        if (e) {
            e.preventDefault && e.preventDefault();
            e.persist && e.persist();
        }
        let hasNoPromiseError = true;
        let fieldValues = Object.assign({}, _formValues);
        _subjects.state.next({
            isSubmitting: true,
        });
        try {
            if (formOptions.resolver) {
                const { errors, values } = await executeResolver();
                _formState.errors = errors;
                fieldValues = values;
            }
            else {
                await validateForm(_fields);
            }
            if (isEmptyObject(_formState.errors) &&
                Object.keys(_formState.errors).every((name) => get(fieldValues, name))) {
                _subjects.state.next({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                onInvalid && (await onInvalid(_formState.errors, e));
                formOptions.shouldFocusError &&
                    focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
            }
        }
        catch (err) {
            hasNoPromiseError = false;
            throw err;
        }
        finally {
            _formState.isSubmitted = true;
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors,
            });
        }
    };
    const reset = (formValues, keepStateOptions = {}) => {
        const updatedValues = formValues || _defaultValues;
        const values = cloneObject(updatedValues);
        _formValues = values;
        if (isWeb && !keepStateOptions.keepValues) {
            for (const name of _names.mount) {
                const field = get(_fields, name);
                if (field && field._f) {
                    const inputRef = Array.isArray(field._f.refs)
                        ? field._f.refs[0]
                        : field._f.ref;
                    try {
                        isHTMLElement(inputRef) && inputRef.closest('form').reset();
                        break;
                    }
                    catch (_a) { }
                }
            }
        }
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = Object.assign({}, updatedValues);
        }
        if (!keepStateOptions.keepValues) {
            _fields = {};
            _subjects.control.next({
                values: keepStateOptions.keepDefaultValues
                    ? _defaultValues
                    : Object.assign({}, updatedValues),
            });
            _subjects.watch.next({});
            _subjects.array.next({
                values,
            });
        }
        _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: '',
        };
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount
                ? _formState.submitCount
                : 0,
            isDirty: keepStateOptions.keepDirty
                ? _formState.isDirty
                : keepStateOptions.keepDefaultValues
                    ? deepEqual(formValues, _defaultValues)
                    : false,
            isSubmitted: keepStateOptions.keepIsSubmitted
                ? _formState.isSubmitted
                : false,
            dirtyFields: keepStateOptions.keepDirty
                ? _formState.dirtyFields
                : {},
            touchedFields: keepStateOptions.keepTouched
                ? _formState.touchedFields
                : {},
            errors: keepStateOptions.keepErrors
                ? _formState.errors
                : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
        _isMounted = !!keepStateOptions.keepIsValid;
    };
    const setFocus = (name) => get(_fields, name)._f.ref.focus();
    const _removeFields = () => {
        for (const name of _names.unMount) {
            const field = get(_fields, name);
            field &&
                (field._f.refs ? field._f.refs.every(live) : live(field._f.ref)) &&
                unregister(name);
        }
        _names.unMount = new Set();
    };
    return {
        control: {
            register,
            unregister,
            _getWatch,
            _getIsDirty,
            _updateValid,
            _updateValues,
            _removeFields,
            _updateFieldArray,
            _getFieldArrayValue,
            _subjects,
            _shouldUnregister: formOptions.shouldUnregister,
            _proxyFormState,
            get _fields() {
                return _fields;
            },
            set _fields(value) {
                _fields = value;
            },
            get _formValues() {
                return _formValues;
            },
            set _formValues(value) {
                _formValues = value;
            },
            get _isMounted() {
                return _isMounted;
            },
            set _isMounted(value) {
                _isMounted = value;
            },
            get _defaultValues() {
                return _defaultValues;
            },
            set _defaultValues(value) {
                _defaultValues = value;
            },
            get _names() {
                return _names;
            },
            set _names(value) {
                _names = value;
            },
            get _isInAction() {
                return _isInAction;
            },
            set _isInAction(value) {
                _isInAction = value;
            },
            get _formState() {
                return _formState;
            },
            set _formState(value) {
                _formState = value;
            },
            _updateProps: (options) => {
                formOptions = Object.assign(Object.assign({}, defaultOptions), options);
            },
        },
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        clearErrors,
        unregister,
        setError,
        setFocus,
    };
}

function useForm(props = {}) {
    const _formControl = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [formState, updateFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        errors: {},
    });
    if (_formControl.current) {
        _formControl.current.control._updateProps(props);
    }
    else {
        _formControl.current = Object.assign(Object.assign({}, createFormControl(props)), { formState });
    }
    const control = _formControl.current.control;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const formStateSubscription = control._subjects.state.subscribe({
            next(formState) {
                if (shouldRenderFormState(formState, control._proxyFormState, true)) {
                    control._formState = Object.assign(Object.assign({}, control._formState), formState);
                    updateFormState(Object.assign({}, control._formState));
                }
            },
        });
        return () => {
            formStateSubscription.unsubscribe();
        };
    }, [control]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!control._isMounted) {
            control._isMounted = true;
            control._proxyFormState.isValid && control._updateValid();
            !props.shouldUnregister && control._updateValues(control._defaultValues);
        }
        control._removeFields();
    });
    _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
    return _formControl.current;
}

function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, } = props || {};
    const _name = react__WEBPACK_IMPORTED_MODULE_0__.useRef(name);
    _name.current = name;
    const [value, updateValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(isUndefined(defaultValue)
        ? control._getWatch(name)
        : defaultValue);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const watchSubscription = control._subjects.watch.subscribe({
            next: ({ name }) => {
                if (!_name.current ||
                    !name ||
                    convertToArrayPayload(_name.current).some((fieldName) => name &&
                        fieldName &&
                        (fieldName.startsWith(name) ||
                            name.startsWith(fieldName)))) {
                    const result = control._getWatch(_name.current, defaultValue, true);
                    updateValue(isObject(result)
                        ? Object.assign({}, result) : Array.isArray(result)
                        ? [...result]
                        : result);
                }
            },
        });
        disabled && watchSubscription.unsubscribe();
        return () => watchSubscription.unsubscribe();
    }, [disabled, control, defaultValue]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        control._removeFields();
    });
    return value;
}


//# sourceMappingURL=index.esm.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbi11cC4xYjk0NTlmNzcyNWZlZWI0YTJlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNjLFNBQVQsR0FBcUI7QUFDbkIsc0JBQ0UsOERBQUMsaUVBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELFNBQUssRUFBQyxRQUF4RDtBQUFBLGVBQ0csY0FESCxlQUVFLDhEQUFDLDJEQUFEO0FBQU0sV0FBSyxFQUFDLFNBQVo7QUFBc0IsVUFBSSxFQUFDLDBCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBSVUsR0FKVixFQUtHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUxILEVBTUcsR0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztLQVhRRjtBQWFULElBQU1HLFNBQVMsR0FBR1Isb0VBQVUsQ0FBQyxVQUFDUyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFNBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRUxDLE1BQUFBLE9BQU8sRUFBRSxNQUZKO0FBR0xDLE1BQUFBLGFBQWEsRUFBRSxRQUhWO0FBSUxDLE1BQUFBLFVBQVUsRUFBRTtBQUpQLEtBRGdDO0FBUXZDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFLE1BREg7QUFDVztBQUNmTixNQUFBQSxTQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFGUCxLQVJpQztBQWF2Q00sSUFBQUEsTUFBTSxFQUFFO0FBQ05D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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLLEdBQUcsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQzlCO0FBQ0EsaUNBQWlDLDJDQUFjO0FBQy9DO0FBQ0E7QUFDQSxJQUFJLDRDQUFlO0FBQ25CO0FBQ0EscUJBQXFCLE1BQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw0Q0FBZTtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUUySTtBQUMzSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduLXVwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvaW5kZXguZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9tZWRpYS9pY29ucy9vc3BpYS5zdmdcIjtcclxuaW1wb3J0IFJlQ0FQVENIQSBmcm9tICdyZWFjdC1nb29nbGUtcmVjYXB0Y2hhJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcblxyXG4vKlxyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG4qL1xyXG5cclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCI+XHJcbiAgICAgICAgT1NQSUFcclxuICAgICAgPC9MaW5rPnsnICd9XHJcbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgIHsnLid9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgfSxcclxuICBcclxuICBsb2dvOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjUpJyxcclxuICB9XHJcblxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBcclxuICBjb25zdCB2ZXJpZnlDYWxsYmFjayA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RvbmUhISEhJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIHsvKiBDaGVjayBMb2dvIEFuaW1hdGlvbiBvbiBTY3JvbGwgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgICA8TG9nbyBhbHQ9XCJPU1BJQVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIFJlZ2lzdHJvIGRlIFVzdWFyaW9cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVzdWFyaW9cIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSB5IEFwZWxsaWRvIG8gUmF6w7NuIFNvY2lhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3JyZW8gRWxlY3Ryw7NuaWNvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFJlQ0FQVENIQVxyXG4gICAgICAgICAgICAgICAgc2l0ZWtleT1cIjZMZkczRmtjQUFBQUFHLWlqYW1OYW5VdGFqWndpcG5fNkFDbGRpSXpcIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPVwiZXhwbGljaXRcIlxyXG4gICAgICAgICAgICAgICAgdmVyaWZ5Q2FsbGJhY2s9e3ZlcmlmeUNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgb25sb2FkQ2FsbGJhY2s9e2NhbGxiYWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RyYXJtZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICBSZWN1cGVyYXIgbWkgY29udHJhc2XDsWFcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICBZYSB0ZW5nbyBjdWVudGEuJm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SW5pY2lhciBTZXNpw7NuPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm94IG10PXs1fT5cclxuICAgICAgICA8Q29weXJpZ2h0IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbnZhciBpc0RhdGVPYmplY3QgPSAoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIERhdGU7XG5cbnZhciBpc051bGxPclVuZGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT0gbnVsbDtcblxuY29uc3QgaXNPYmplY3RUeXBlID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG52YXIgaXNPYmplY3QgPSAodmFsdWUpID0+ICFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgJiZcclxuICAgICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgaXNPYmplY3RUeXBlKHZhbHVlKSAmJlxyXG4gICAgIWlzRGF0ZU9iamVjdCh2YWx1ZSk7XG5cbnZhciBnZXRDb250cm9sbGVyVmFsdWUgPSAoZXZlbnQpID0+IGlzT2JqZWN0KGV2ZW50KSAmJiBldmVudC50YXJnZXRcclxuICAgID8gaXNDaGVja0JveElucHV0KGV2ZW50LnRhcmdldClcclxuICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIDogZXZlbnQ7XG5cbnZhciBnZXROb2RlUGFyZW50TmFtZSA9IChuYW1lKSA9PiBuYW1lLnN1YnN0cmluZygwLCBuYW1lLnNlYXJjaCgvLlxcZC8pKSB8fCBuYW1lO1xuXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGdldE5vZGVQYXJlbnROYW1lKG5hbWUpID09PSBjdXJyZW50KTtcblxudmFyIGNvbXBhY3QgPSAodmFsdWUpID0+IHZhbHVlLmZpbHRlcihCb29sZWFuKTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGlmIChpc09iamVjdChvYmopICYmIHBhdGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wYWN0KHBhdGguc3BsaXQoL1ssW1xcXS5dKz8vKSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSksIG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKHJlc3VsdCkgfHwgcmVzdWx0ID09PSBvYmpcclxuICAgICAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBvYmpbcGF0aF1cclxuICAgICAgICAgICAgOiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xuXG5jb25zdCBFVkVOVFMgPSB7XHJcbiAgICBCTFVSOiAnYmx1cicsXHJcbiAgICBDSEFOR0U6ICdjaGFuZ2UnLFxyXG59O1xyXG5jb25zdCBWQUxJREFUSU9OX01PREUgPSB7XHJcbiAgICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gICAgb25DaGFuZ2U6ICdvbkNoYW5nZScsXHJcbiAgICBvblN1Ym1pdDogJ29uU3VibWl0JyxcclxuICAgIG9uVG91Y2hlZDogJ29uVG91Y2hlZCcsXHJcbiAgICBhbGw6ICdhbGwnLFxyXG59O1xyXG5jb25zdCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTID0ge1xyXG4gICAgbWF4OiAnbWF4JyxcclxuICAgIG1pbjogJ21pbicsXHJcbiAgICBtYXhMZW5ndGg6ICdtYXhMZW5ndGgnLFxyXG4gICAgbWluTGVuZ3RoOiAnbWluTGVuZ3RoJyxcclxuICAgIHBhdHRlcm46ICdwYXR0ZXJuJyxcclxuICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgdmFsaWRhdGU6ICd2YWxpZGF0ZScsXHJcbn07XG5cbnZhciBvbWl0ID0gKHNvdXJjZSwga2V5KSA9PiB7XHJcbiAgICBjb25zdCBjb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgc291cmNlKTtcclxuICAgIGRlbGV0ZSBjb3B5W2tleV07XHJcbiAgICByZXR1cm4gY29weTtcclxufTtcblxuY29uc3QgRm9ybUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xyXG5Gb3JtQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSSEZDb250ZXh0JztcclxuY29uc3QgdXNlRm9ybUNvbnRleHQgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuY29uc3QgRm9ybVByb3ZpZGVyID0gKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogb21pdChwcm9wcywgJ2NoaWxkcmVuJykgfSwgcHJvcHMuY2hpbGRyZW4pKTtcblxudmFyIGdldFByb3h5Rm9ybVN0YXRlID0gKGZvcm1TdGF0ZSwgX3Byb3h5Rm9ybVN0YXRlLCBsb2NhbFByb3h5Rm9ybVN0YXRlLCBpc1Jvb3QgPSB0cnVlKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVHZXR0ZXIocHJvcCkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGZvcm1TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZVtwcm9wXSAhPT0gVkFMSURBVElPTl9NT0RFLmFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcm94eUZvcm1TdGF0ZVtwcm9wXSA9ICFpc1Jvb3QgfHwgVkFMSURBVElPTl9NT0RFLmFsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsUHJveHlGb3JtU3RhdGUgJiYgKGxvY2FsUHJveHlGb3JtU3RhdGVbcHJvcF0gPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtU3RhdGVbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtU3RhdGUpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCBrZXksIHtcclxuICAgICAgICAgICAgZ2V0OiBjcmVhdGVHZXR0ZXIoa2V5KSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XG5cbnZhciBpc0VtcHR5T2JqZWN0ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG5cbnZhciBzaG91bGRSZW5kZXJGb3JtU3RhdGUgPSAoZm9ybVN0YXRlRGF0YSwgX3Byb3h5Rm9ybVN0YXRlLCBpc1Jvb3QpID0+IHtcclxuICAgIGNvbnN0IGZvcm1TdGF0ZSA9IG9taXQoZm9ybVN0YXRlRGF0YSwgJ25hbWUnKTtcclxuICAgIHJldHVybiAoaXNFbXB0eU9iamVjdChmb3JtU3RhdGUpIHx8XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlKS5sZW5ndGggPj0gT2JqZWN0LmtleXMoX3Byb3h5Rm9ybVN0YXRlKS5sZW5ndGggfHxcclxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmZpbmQoKGtleSkgPT4gX3Byb3h5Rm9ybVN0YXRlW2tleV0gPT09XHJcbiAgICAgICAgICAgICghaXNSb290IHx8IFZBTElEQVRJT05fTU9ERS5hbGwpKSk7XHJcbn07XG5cbnZhciBjb252ZXJ0VG9BcnJheVBheWxvYWQgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuXG5mdW5jdGlvbiB1c2VGb3JtU3RhdGUocHJvcHMpIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBjb250cm9sID0gbWV0aG9kcy5jb250cm9sLCBkaXNhYmxlZCwgbmFtZSB9ID0gcHJvcHMgfHwge307XHJcbiAgICBjb25zdCBuYW1lUmVmID0gUmVhY3QudXNlUmVmKG5hbWUpO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgdXBkYXRlRm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGNvbnRyb2wuX2Zvcm1TdGF0ZSk7XHJcbiAgICBjb25zdCBfbG9jYWxQcm94eUZvcm1TdGF0ZSA9IFJlYWN0LnVzZVJlZih7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgbmFtZVJlZi5jdXJyZW50ID0gbmFtZTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybVN0YXRlU3Vic2NyaXB0aW9uID0gY29udHJvbC5fc3ViamVjdHMuc3RhdGUuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKGZvcm1TdGF0ZSkgPT4gKCFuYW1lUmVmLmN1cnJlbnQgfHxcclxuICAgICAgICAgICAgICAgICFmb3JtU3RhdGUubmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWVSZWYuY3VycmVudCkuaW5jbHVkZXMoZm9ybVN0YXRlLm5hbWUpKSAmJlxyXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyRm9ybVN0YXRlKGZvcm1TdGF0ZSwgX2xvY2FsUHJveHlGb3JtU3RhdGUuY3VycmVudCkgJiZcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbnRyb2wuX2Zvcm1TdGF0ZSksIGZvcm1TdGF0ZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc2FibGVkICYmIGZvcm1TdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBmb3JtU3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFtkaXNhYmxlZCwgY29udHJvbF0pO1xyXG4gICAgcmV0dXJuIGdldFByb3h5Rm9ybVN0YXRlKGZvcm1TdGF0ZSwgY29udHJvbC5fcHJveHlGb3JtU3RhdGUsIF9sb2NhbFByb3h5Rm9ybVN0YXRlLmN1cnJlbnQsIGZhbHNlKTtcclxufVxuXG52YXIgaXNLZXkgPSAodmFsdWUpID0+IC9eXFx3KiQvLnRlc3QodmFsdWUpO1xuXG52YXIgc3RyaW5nVG9QYXRoID0gKGlucHV0KSA9PiBjb21wYWN0KGlucHV0LnJlcGxhY2UoL1tcInwnXXxcXF0vZywgJycpLnNwbGl0KC9cXC58XFxbLykpO1xuXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBjb25zdCB0ZW1wUGF0aCA9IGlzS2V5KHBhdGgpID8gW3BhdGhdIDogc3RyaW5nVG9QYXRoKHBhdGgpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGVtcFBhdGgubGVuZ3RoO1xyXG4gICAgY29uc3QgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGVtcFBhdGhbaW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9ialZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KG9ialZhbHVlKSB8fCBBcnJheS5pc0FycmF5KG9ialZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gb2JqVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA6ICFpc05hTigrdGVtcFBhdGhbaW5kZXggKyAxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3Rba2V5XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgbmFtZSwgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgc2hvdWxkVW5yZWdpc3RlciB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldElucHV0U3RhdGVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShnZXQoY29udHJvbC5fZm9ybVZhbHVlcywgbmFtZSwgZ2V0KGNvbnRyb2wuX2RlZmF1bHRWYWx1ZXMsIG5hbWUsIHByb3BzLmRlZmF1bHRWYWx1ZSkpKTtcclxuICAgIHNldChjb250cm9sLl9mb3JtVmFsdWVzLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICBjb25zdCBmb3JtU3RhdGUgPSB1c2VGb3JtU3RhdGUoe1xyXG4gICAgICAgIGNvbnRyb2w6IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyUHJvcHMgPSBjb250cm9sLnJlZ2lzdGVyKG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMucnVsZXMpLCB7IHZhbHVlIH0pKTtcclxuICAgIGNvbnN0IHVwZGF0ZU1vdW50ZWQgPSBSZWFjdC51c2VDYWxsYmFjaygobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChjb250cm9sLl9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250cm9sXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXJTdWJzY3JpcHRpb24gPSBjb250cm9sLl9zdWJqZWN0cy5jb250cm9sLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChkYXRhKSA9PiAoIWRhdGEubmFtZSB8fCBuYW1lID09PSBkYXRhLm5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZ2V0KGRhdGEudmFsdWVzLCBuYW1lKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlTW91bnRlZChuYW1lLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQgPSBjb250cm9sLl9zaG91bGRVbnJlZ2lzdGVyIHx8IHNob3VsZFVucmVnaXN0ZXI7XHJcbiAgICAgICAgICAgIGlmIChpc05hbWVJbkZpZWxkQXJyYXkoY29udHJvbC5fbmFtZXMuYXJyYXksIG5hbWUpXHJcbiAgICAgICAgICAgICAgICA/IF9zaG91bGRVbnJlZ2lzdGVyRmllbGQgJiYgIWNvbnRyb2wuX2lzSW5BY3Rpb25cclxuICAgICAgICAgICAgICAgIDogX3Nob3VsZFVucmVnaXN0ZXJGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC51bnJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTW91bnRlZChuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW25hbWUsIGNvbnRyb2wsIHNob3VsZFVucmVnaXN0ZXIsIHVwZGF0ZU1vdW50ZWRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmllbGQ6IHtcclxuICAgICAgICAgICAgb25DaGFuZ2U6IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRDb250cm9sbGVyVmFsdWUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRTdGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEVWRU5UUy5DSEFOR0UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CbHVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RlclByb3BzLm9uQmx1cih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRVZFTlRTLkJMVVIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIHJlZjogKGVsbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoY29udHJvbC5fZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbG0gJiYgZmllbGQgJiYgZWxtLmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuX2YucmVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1czogKCkgPT4gZWxtLmZvY3VzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkaXR5OiAobWVzc2FnZSkgPT4gZWxtLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRWYWxpZGl0eTogKCkgPT4gZWxtLnJlcG9ydFZhbGlkaXR5KCksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1TdGF0ZSxcclxuICAgICAgICBmaWVsZFN0YXRlOiB7XHJcbiAgICAgICAgICAgIGludmFsaWQ6ICEhZ2V0KGZvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgICAgICBpc0RpcnR5OiAhIWdldChmb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpLFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQ6ICEhZ2V0KGZvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSxcclxuICAgICAgICAgICAgZXJyb3I6IGdldChmb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxuXG5jb25zdCBDb250cm9sbGVyID0gKHByb3BzKSA9PiBwcm9wcy5yZW5kZXIodXNlQ29udHJvbGxlcihwcm9wcykpO1xuXG52YXIgYXBwZW5kRXJyb3JzID0gKG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3JzLCB0eXBlLCBtZXNzYWdlKSA9PiB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFcclxuICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvcnNbbmFtZV0pLCB7IHR5cGVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChlcnJvcnNbbmFtZV0gJiYgZXJyb3JzW25hbWVdLnR5cGVzID8gZXJyb3JzW25hbWVdLnR5cGVzIDoge30pKSwgeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9KSB9KSA6IHt9O1xuXG5jb25zdCBmb2N1c0ZpZWxkQnkgPSAoZmllbGRzLCBjYWxsYmFjaywgZmllbGRzTmFtZXMpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIGZpZWxkc05hbWVzIHx8IE9iamVjdC5rZXlzKGZpZWxkcykpIHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChmaWVsZHMsIGtleSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9mID0gZmllbGQuX2Y7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBvbWl0KGZpZWxkLCAnX2YnKTtcclxuICAgICAgICAgICAgaWYgKF9mICYmIGNhbGxiYWNrKF9mLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2YucmVmLmZvY3VzICYmIGlzVW5kZWZpbmVkKF9mLnJlZi5mb2N1cygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2YucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnJlZnNbMF0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGN1cnJlbnQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIGdldEZvY3VzRmllbGROYW1lID0gKG5hbWUsIGluZGV4LCBvcHRpb25zKSA9PiBvcHRpb25zICYmICFvcHRpb25zLnNob3VsZEZvY3VzXHJcbiAgICA/IG9wdGlvbnMuZm9jdXNOYW1lIHx8IGAke25hbWV9LiR7b3B0aW9ucy5mb2N1c0luZGV4fS5gXHJcbiAgICA6IGAke25hbWV9LiR7aW5kZXh9LmA7XG5cbnZhciBtYXBDdXJyZW50SWRzID0gKHZhbHVlcywgX2ZpZWxkSWRzLCBrZXlOYW1lKSA9PiB2YWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IF9maWVsZElkcy5jdXJyZW50W2luZGV4XTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbHVlKSwgKG91dHB1dCA/IHsgW2tleU5hbWVdOiBvdXRwdXRba2V5TmFtZV0gfSA6IHt9KSk7XHJcbn0pO1xuXG52YXIgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGQgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICd1bmRlZmluZWQnID8gRGF0ZS5ub3coKSA6IHBlcmZvcm1hbmNlLm5vdygpICogMTAwMDtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYgKyBkKSAlIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn07XG5cbnZhciBtYXBJZHMgPSAodmFsdWVzID0gW10sIGtleU5hbWUpID0+IHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAodmFsdWVba2V5TmFtZV0gPyB7fSA6IHsgW2tleU5hbWVdOiBnZW5lcmF0ZUlkKCkgfSkpLCB2YWx1ZSkpKTtcblxuZnVuY3Rpb24gYXBwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZChkYXRhKSwgLi4uY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKV07XHJcbn1cblxudmFyIGZpbGxFbXB0eUFycmF5ID0gKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCgoKSA9PiB1bmRlZmluZWQpIDogdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpbnNlcnQoZGF0YSwgaW5kZXgsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIC4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZCh2YWx1ZSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVt0b10pKSB7XHJcbiAgICAgICAgICAgIGRhdGFbdG9dID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnNwbGljZSh0bywgMCwgZGF0YS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZCh2YWx1ZSksIC4uLmNvbnZlcnRUb0FycmF5UGF5bG9hZChkYXRhKV07XHJcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXRJbmRleGVzKGRhdGEsIGluZGV4ZXMpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4ZXMpIHtcclxuICAgICAgICB0ZW1wLnNwbGljZShpbmRleCAtIGksIDEpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYWN0KHRlbXApLmxlbmd0aCA/IHRlbXAgOiBbXTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBjb252ZXJ0VG9BcnJheVBheWxvYWQoaW5kZXgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKSk7XG5cbnZhciBzd2FwQXJyYXlBdCA9IChkYXRhLCBpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgZGF0YVtpbmRleEFdID0gW2RhdGFbaW5kZXhCXSwgKGRhdGFbaW5kZXhCXSA9IGRhdGFbaW5kZXhBXSldWzBdO1xyXG59O1xuXG52YXIgdXBkYXRlQXQgPSAoZmllbGRWYWx1ZXMsIGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgZmllbGRWYWx1ZXNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICByZXR1cm4gZmllbGRWYWx1ZXM7XHJcbn07XG5cbmNvbnN0IHVzZUZpZWxkQXJyYXkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBjb250cm9sID0gbWV0aG9kcy5jb250cm9sLCBuYW1lLCBrZXlOYW1lID0gJ2lkJywgc2hvdWxkVW5yZWdpc3RlciwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IFJlYWN0LnVzZVN0YXRlKG1hcElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIGtleU5hbWUpKTtcclxuICAgIGNvbnN0IF9maWVsZElkcyA9IFJlYWN0LnVzZVJlZihmaWVsZHMpO1xyXG4gICAgX2ZpZWxkSWRzLmN1cnJlbnQgPSBmaWVsZHM7XHJcbiAgICBjb250cm9sLl9uYW1lcy5hcnJheS5hZGQobmFtZSk7XHJcbiAgICBjb25zdCBhcHBlbmQkMSA9ICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFZhbHVlID0gY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkgPSBhcHBlbmQobWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSksIG1hcElkcyhjb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLCBrZXlOYW1lKSk7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShrZXlOYW1lLCBuYW1lLCBhcHBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZmlsbEVtcHR5QXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgPSBnZXRGb2N1c0ZpZWxkTmFtZShuYW1lLCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkubGVuZ3RoIC0gYXBwZW5kVmFsdWUubGVuZ3RoLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBwcmVwZW5kJDEgPSAodmFsdWUsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkgPSBwcmVwZW5kKG1hcEN1cnJlbnRJZHMoY29udHJvbC5fZ2V0RmllbGRBcnJheVZhbHVlKG5hbWUpLCBfZmllbGRJZHMsIGtleU5hbWUpLCBtYXBJZHMoY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkoa2V5TmFtZSwgbmFtZSwgcHJlcGVuZCwge1xyXG4gICAgICAgICAgICBhcmdBOiBmaWxsRW1wdHlBcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5KTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9IGdldEZvY3VzRmllbGROYW1lKG5hbWUsIDAsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSA9IHJlbW92ZUFycmF5QXQobWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSksIGluZGV4KTtcclxuICAgICAgICBzZXRGaWVsZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5KTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KGtleU5hbWUsIG5hbWUsIHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnNlcnQkMSA9IChpbmRleCwgdmFsdWUsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkgPSBpbnNlcnQobWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSksIGluZGV4LCBtYXBJZHMoY29udmVydFRvQXJyYXlQYXlsb2FkKHZhbHVlKSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkcyh1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXkpO1xyXG4gICAgICAgIGNvbnRyb2wuX3VwZGF0ZUZpZWxkQXJyYXkoa2V5TmFtZSwgbmFtZSwgaW5zZXJ0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdCOiBmaWxsRW1wdHlBcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5KTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9IGdldEZvY3VzRmllbGROYW1lKG5hbWUsIGluZGV4LCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2FwID0gKGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5ID0gbWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5LCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShrZXlOYW1lLCBuYW1lLCBzd2FwQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleEEsXHJcbiAgICAgICAgICAgIGFyZ0I6IGluZGV4QixcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXksIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5ID0gbWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5LCBmcm9tLCB0byk7XHJcbiAgICAgICAgc2V0RmllbGRzKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShrZXlOYW1lLCBuYW1lLCBtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdCOiB0byxcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXksIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGUgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5ID0gbWFwQ3VycmVudElkcyhjb250cm9sLl9nZXRGaWVsZEFycmF5VmFsdWUobmFtZSksIF9maWVsZElkcywga2V5TmFtZSk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSB1cGRhdGVBdCh1cGRhdGVkRmllbGRBcnJheVZhbHVlc1dpdGhLZXksIGluZGV4LCB2YWx1ZSk7XHJcbiAgICAgICAgX2ZpZWxkSWRzLmN1cnJlbnQgPSBtYXBJZHModXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGtleU5hbWUpO1xyXG4gICAgICAgIHNldEZpZWxkcyhfZmllbGRJZHMuY3VycmVudCk7XHJcbiAgICAgICAgY29udHJvbC5fdXBkYXRlRmllbGRBcnJheShrZXlOYW1lLCBuYW1lLCB1cGRhdGVBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQjogdmFsdWUsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5LCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVwbGFjZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG1hcElkcyhjb252ZXJ0VG9BcnJheVBheWxvYWQodmFsdWUpLCBrZXlOYW1lKTtcclxuICAgICAgICBzZXRGaWVsZHModmFsdWVzKTtcclxuICAgICAgICBjb250cm9sLl91cGRhdGVGaWVsZEFycmF5KGtleU5hbWUsIG5hbWUsICgpID0+IHZhbHVlcywge30sIHZhbHVlcywgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29udHJvbC5faXNJbkFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjb250cm9sLl9uYW1lcy53YXRjaEFsbCkge1xyXG4gICAgICAgICAgICBjb250cm9sLl9zdWJqZWN0cy5zdGF0ZS5uZXh0KHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd2F0Y2hGaWVsZCBvZiBjb250cm9sLl9uYW1lcy53YXRjaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCh3YXRjaEZpZWxkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuX3N1YmplY3RzLnN0YXRlLm5leHQoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2wuX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IGNvbnRyb2wuX2Zvcm1WYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udHJvbC5fbmFtZXMuZm9jdXMgJiZcclxuICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KGNvbnRyb2wuX2ZpZWxkcywgKGtleSkgPT4ga2V5LnN0YXJ0c1dpdGgoY29udHJvbC5fbmFtZXMuZm9jdXMpKTtcclxuICAgICAgICBjb250cm9sLl9uYW1lcy5mb2N1cyA9ICcnO1xyXG4gICAgICAgIGNvbnRyb2wuX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQgJiYgY29udHJvbC5fdXBkYXRlVmFsaWQoKTtcclxuICAgIH0sIFtmaWVsZHMsIG5hbWUsIGNvbnRyb2wsIGtleU5hbWVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheVN1YnNjcmlwdGlvbiA9IGNvbnRyb2wuX3N1YmplY3RzLmFycmF5LnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQoeyB2YWx1ZXMsIG5hbWU6IGZpZWxkQXJyYXlOYW1lIH0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZSA9PT0gbmFtZSB8fCAhZmllbGRBcnJheU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZHMobWFwSWRzKGdldCh2YWx1ZXMsIG5hbWUpLCBrZXlOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIWdldChjb250cm9sLl9mb3JtVmFsdWVzLCBuYW1lKSAmJiBzZXQoY29udHJvbC5fZm9ybVZhbHVlcywgbmFtZSwgW10pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZpZWxkQXJyYXlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wuX3Nob3VsZFVucmVnaXN0ZXIgfHwgc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC51bnJlZ2lzdGVyKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtuYW1lLCBjb250cm9sLCBrZXlOYW1lLCBzaG91bGRVbnJlZ2lzdGVyXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN3YXA6IFJlYWN0LnVzZUNhbGxiYWNrKHN3YXAsIFtuYW1lLCBjb250cm9sLCBrZXlOYW1lXSksXHJcbiAgICAgICAgbW92ZTogUmVhY3QudXNlQ2FsbGJhY2sobW92ZSwgW25hbWUsIGNvbnRyb2wsIGtleU5hbWVdKSxcclxuICAgICAgICBwcmVwZW5kOiBSZWFjdC51c2VDYWxsYmFjayhwcmVwZW5kJDEsIFtuYW1lLCBjb250cm9sLCBrZXlOYW1lXSksXHJcbiAgICAgICAgYXBwZW5kOiBSZWFjdC51c2VDYWxsYmFjayhhcHBlbmQkMSwgW25hbWUsIGNvbnRyb2wsIGtleU5hbWVdKSxcclxuICAgICAgICByZW1vdmU6IFJlYWN0LnVzZUNhbGxiYWNrKHJlbW92ZSwgW25hbWUsIGNvbnRyb2wsIGtleU5hbWVdKSxcclxuICAgICAgICBpbnNlcnQ6IFJlYWN0LnVzZUNhbGxiYWNrKGluc2VydCQxLCBbbmFtZSwgY29udHJvbCwga2V5TmFtZV0pLFxyXG4gICAgICAgIHVwZGF0ZTogUmVhY3QudXNlQ2FsbGJhY2sodXBkYXRlLCBbbmFtZSwgY29udHJvbCwga2V5TmFtZV0pLFxyXG4gICAgICAgIHJlcGxhY2U6IFJlYWN0LnVzZUNhbGxiYWNrKHJlcGxhY2UsIFtuYW1lLCBjb250cm9sLCBrZXlOYW1lXSksXHJcbiAgICAgICAgZmllbGRzOiBmaWVsZHMsXHJcbiAgICB9O1xyXG59O1xuXG5mdW5jdGlvbiBjbG9uZU9iamVjdChkYXRhKSB7XHJcbiAgICBsZXQgY29weTtcclxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBEYXRlKGRhdGEuZ2V0VGltZSgpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzQXJyYXkgfHwgaXNPYmplY3QoZGF0YSkpIHtcclxuICAgICAgICBjb3B5ID0gaXNBcnJheSA/IFtdIDoge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBjb3B5W2tleV0gPSBjbG9uZU9iamVjdChkYXRhW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcHk7XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGRlZXBFcXVhbChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUob2JqZWN0MSkgfHxcclxuICAgICAgICBpc1ByaW1pdGl2ZShvYmplY3QyKSB8fFxyXG4gICAgICAgIGlzRGF0ZU9iamVjdChvYmplY3QxKSB8fFxyXG4gICAgICAgIGlzRGF0ZU9iamVjdChvYmplY3QyKSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XHJcbiAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xyXG4gICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgaWYgKCFrZXlzMi5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3JlZicpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcclxuICAgICAgICAgICAgaWYgKChpc09iamVjdCh2YWwxKSB8fCBBcnJheS5pc0FycmF5KHZhbDEpKSAmJlxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHZhbDIpIHx8IEFycmF5LmlzQXJyYXkodmFsMikpXHJcbiAgICAgICAgICAgICAgICA/ICFkZWVwRXF1YWwodmFsMSwgdmFsMilcclxuICAgICAgICAgICAgICAgIDogdmFsMSAhPT0gdmFsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cblxudmFyIGdldFZhbGlkYXRpb25Nb2RlcyA9IChtb2RlKSA9PiAoe1xyXG4gICAgaXNPblN1Ym1pdDogIW1vZGUgfHwgbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uU3VibWl0LFxyXG4gICAgaXNPbkJsdXI6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkJsdXIsXHJcbiAgICBpc09uQ2hhbmdlOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsXHJcbiAgICBpc09uQWxsOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsLFxyXG4gICAgaXNPblRvdWNoOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25Ub3VjaGVkLFxyXG59KTtcblxudmFyIGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzSFRNTEVsZW1lbnQgPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG5cbnZhciBpc011bHRpcGxlU2VsZWN0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYHNlbGVjdC1tdWx0aXBsZWA7XG5cbnZhciBpc1JhZGlvSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAncmFkaW8nO1xuXG52YXIgaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbiA9IChyZWYpID0+IGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xuXG52YXIgaXNTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG5cbnZhciBpc1dlYiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICB0eXBlb2Ygd2luZG93LkhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGxpdmUgPSAocmVmKSA9PiAhaXNIVE1MRWxlbWVudChyZWYpIHx8ICFkb2N1bWVudC5jb250YWlucyhyZWYpO1xuXG52YXIgb21pdEtleSA9IChmaWVsZHMsIGtleU5hbWUpID0+IGZpZWxkcy5tYXAoKGZpZWxkID0ge30pID0+IG9taXQoZmllbGQsIGtleU5hbWUpKTtcblxuY2xhc3MgU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGVhckRvd25zID0gW107XHJcbiAgICB9XHJcbiAgICBhZGQodGVhckRvd24pIHtcclxuICAgICAgICB0aGlzLnRlYXJEb3ducy5wdXNoKHRlYXJEb3duKTtcclxuICAgIH1cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGVhcmRvd24gb2YgdGhpcy50ZWFyRG93bnMpIHtcclxuICAgICAgICAgICAgdGVhcmRvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZWFyRG93bnMgPSBbXTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBTdWJzY3JpYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVyLCBzdWJzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcclxuICAgICAgICBzdWJzY3JpcHRpb24uYWRkKCgpID0+ICh0aGlzLmNsb3NlZCA9IHRydWUpKTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFN1YmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcikge1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIob2JzZXJ2ZXIsIHN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcclxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIG9iamVjdCA9IGlzVW5kZWZpbmVkKG9iamVjdCkgPyBpbmRleCsrIDogb2JqZWN0W3VwZGF0ZVBhdGhbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5mdW5jdGlvbiB1bnNldChvYmplY3QsIHBhdGgpIHtcclxuICAgIGNvbnN0IHVwZGF0ZVBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gdXBkYXRlUGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCB1cGRhdGVQYXRoKTtcclxuICAgIGNvbnN0IGtleSA9IHVwZGF0ZVBhdGhbdXBkYXRlUGF0aC5sZW5ndGggLSAxXTtcclxuICAgIGxldCBwcmV2aW91c09ialJlZjtcclxuICAgIGlmIChjaGlsZE9iamVjdCkge1xyXG4gICAgICAgIGRlbGV0ZSBjaGlsZE9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBvYmplY3RSZWY7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtKGsgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzTGVuZ3RoID0gY3VycmVudFBhdGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGsgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGN1cnJlbnRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgIG9iamVjdFJlZiA9IG9iamVjdFJlZiA/IG9iamVjdFJlZltpdGVtXSA6IG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoc0xlbmd0aCA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICgoaXNPYmplY3Qob2JqZWN0UmVmKSAmJiBpc0VtcHR5T2JqZWN0KG9iamVjdFJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkob2JqZWN0UmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhb2JqZWN0UmVmLmZpbHRlcigoZGF0YSkgPT4gKGlzT2JqZWN0KGRhdGEpICYmICFpc0VtcHR5T2JqZWN0KGRhdGEpKSB8fCBpc0Jvb2xlYW4oZGF0YSkpLmxlbmd0aCkpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c09ialJlZiA/IGRlbGV0ZSBwcmV2aW91c09ialJlZltpdGVtXSA6IGRlbGV0ZSBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPSBvYmplY3RSZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IHZhbGlkUmVzdWx0ID0geyB2YWx1ZTogdHJ1ZSwgaXNWYWxpZDogdHJ1ZSB9O1xyXG52YXIgZ2V0Q2hlY2tib3hWYWx1ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLmNoZWNrZWQgJiYgIW9wdGlvbi5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlcywgaXNWYWxpZDogISF2YWx1ZXMubGVuZ3RoIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcHRpb25zWzBdLmNoZWNrZWQgJiYgIW9wdGlvbnNbMF0uZGlzYWJsZWRcclxuICAgICAgICAgICAgPyAvLyBAdHMtZXhwZWN0LWVycm9yIGV4cGVjdGVkIHRvIHdvcmsgaW4gdGhlIGJyb3dzZXJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbMF0uYXR0cmlidXRlcyAmJiAhaXNVbmRlZmluZWQob3B0aW9uc1swXS5hdHRyaWJ1dGVzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gaXNVbmRlZmluZWQob3B0aW9uc1swXS52YWx1ZSkgfHwgb3B0aW9uc1swXS52YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWxpZFJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHsgdmFsdWU6IG9wdGlvbnNbMF0udmFsdWUsIGlzVmFsaWQ6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgOiBkZWZhdWx0UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XHJcbn07XG5cbnZhciBnZXRGaWVsZFZhbHVlQXMgPSAodmFsdWUsIHsgdmFsdWVBc051bWJlciwgdmFsdWVBc0RhdGUsIHNldFZhbHVlQXMgfSkgPT4gaXNVbmRlZmluZWQodmFsdWUpXHJcbiAgICA/IHZhbHVlXHJcbiAgICA6IHZhbHVlQXNOdW1iZXJcclxuICAgICAgICA/IHZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICA/IE5hTlxyXG4gICAgICAgICAgICA6ICt2YWx1ZVxyXG4gICAgICAgIDogdmFsdWVBc0RhdGVcclxuICAgICAgICAgICAgPyBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgOiBzZXRWYWx1ZUFzXHJcbiAgICAgICAgICAgICAgICA/IHNldFZhbHVlQXModmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IHZhbHVlO1xuXG52YXIgZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZSA9IChvcHRpb25zKSA9PiBbLi4ub3B0aW9uc11cclxuICAgIC5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpXHJcbiAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcblxuY29uc3QgZGVmYXVsdFJldHVybiA9IHtcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbn07XHJcbnZhciBnZXRSYWRpb1ZhbHVlID0gKG9wdGlvbnMpID0+IEFycmF5LmlzQXJyYXkob3B0aW9ucylcclxuICAgID8gb3B0aW9ucy5yZWR1Y2UoKHByZXZpb3VzLCBvcHRpb24pID0+IG9wdGlvbiAmJiBvcHRpb24uY2hlY2tlZCAmJiAhb3B0aW9uLmRpc2FibGVkXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogcHJldmlvdXMsIGRlZmF1bHRSZXR1cm4pXHJcbiAgICA6IGRlZmF1bHRSZXR1cm47XG5cbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoX2YpIHtcclxuICAgIGNvbnN0IHJlZiA9IF9mLnJlZjtcclxuICAgIGlmIChfZi5yZWZzID8gX2YucmVmcy5ldmVyeSgocmVmKSA9PiByZWYuZGlzYWJsZWQpIDogcmVmLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRmlsZUlucHV0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gcmVmLmZpbGVzO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoX2YucmVmcykudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlU2VsZWN0VmFsdWUocmVmLm9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQ2hlY2tCb3hJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoX2YucmVmcykudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0RmllbGRWYWx1ZUFzKGlzVW5kZWZpbmVkKHJlZi52YWx1ZSkgPyBfZi5yZWYudmFsdWUgOiByZWYudmFsdWUsIF9mKTtcclxufVxuXG52YXIgZ2V0UmVzb2x2ZXJPcHRpb25zID0gKGZpZWxkc05hbWVzLCBfZmllbGRzcywgY3JpdGVyaWFNb2RlLCBzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBmaWVsZHNOYW1lcykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHNzLCBuYW1lKTtcclxuICAgICAgICBmaWVsZCAmJiBzZXQoZmllbGRzLCBuYW1lLCBmaWVsZC5fZik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyaXRlcmlhTW9kZSxcclxuICAgICAgICBuYW1lczogWy4uLmZpZWxkc05hbWVzXSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbixcclxuICAgIH07XHJcbn07XG5cbnZhciBoYXNWYWxpZGF0aW9uID0gKG9wdGlvbnMpID0+IG9wdGlvbnMubW91bnQgJiZcclxuICAgIChvcHRpb25zLnJlcXVpcmVkIHx8XHJcbiAgICAgICAgb3B0aW9ucy5taW4gfHxcclxuICAgICAgICBvcHRpb25zLm1heCB8fFxyXG4gICAgICAgIG9wdGlvbnMubWF4TGVuZ3RoIHx8XHJcbiAgICAgICAgb3B0aW9ucy5taW5MZW5ndGggfHxcclxuICAgICAgICBvcHRpb25zLnBhdHRlcm4gfHxcclxuICAgICAgICBvcHRpb25zLnZhbGlkYXRlKTtcblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZShzb3VyY2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgY29uc3Qgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9XHJcbiAgICAgICAgICAgICAgICAoaXNPYmplY3QodGFyZ2V0VmFsdWUpICYmIGlzT2JqZWN0KHNvdXJjZVZhbHVlKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheSh0YXJnZXRWYWx1ZSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VWYWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkZWVwTWVyZ2UodGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc291cmNlVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XG5cbmZ1bmN0aW9uIHNldERpcnR5RmllbGRzKHZhbHVlcywgZGVmYXVsdFZhbHVlcywgZGlydHlGaWVsZHMsIHBhcmVudE5vZGUsIHBhcmVudE5hbWUpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzW2luZGV4XSkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXNbaW5kZXhdW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAhZGlydHlGaWVsZHNbaW5kZXhdICYmIChkaXJ0eUZpZWxkc1tpbmRleF0gPSB7fSk7XHJcbiAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkc1tpbmRleF1ba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2V0RGlydHlGaWVsZHModmFsdWVzW2luZGV4XVtrZXldLCBnZXQoZGVmYXVsdFZhbHVlc1tpbmRleF0gfHwge30sIGtleSwgW10pLCBkaXJ0eUZpZWxkc1tpbmRleF1ba2V5XSwgZGlydHlGaWVsZHNbaW5kZXhdLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIWlzTnVsbE9yVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZXMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGVlcEVxdWFsKGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5KSwgdmFsdWVzW2luZGV4XVtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2V0KGRpcnR5RmllbGRzW2luZGV4XSB8fCB7fSwga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGRpcnR5RmllbGRzW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGlydHlGaWVsZHNbaW5kZXhdKSwgeyBba2V5XTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50Tm9kZSAmJlxyXG4gICAgICAgICAgICAhZGlydHlGaWVsZHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlW3BhcmVudE5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpcnR5RmllbGRzO1xyXG59XHJcbnZhciBzZXRGaWVsZEFycmF5RGlydHlGaWVsZHMgPSAodmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcykgPT4gZGVlcE1lcmdlKHNldERpcnR5RmllbGRzKHZhbHVlcywgZGVmYXVsdFZhbHVlcywgZGlydHlGaWVsZHMuc2xpY2UoMCwgdmFsdWVzLmxlbmd0aCkpLCBzZXREaXJ0eUZpZWxkcyhkZWZhdWx0VmFsdWVzLCB2YWx1ZXMsIGRpcnR5RmllbGRzLnNsaWNlKDAsIHZhbHVlcy5sZW5ndGgpKSk7XG5cbnZhciBza2lwVmFsaWRhdGlvbiA9IChpc0JsdXJFdmVudCwgaXNUb3VjaGVkLCBpc1N1Ym1pdHRlZCwgcmVWYWxpZGF0ZU1vZGUsIG1vZGUpID0+IHtcclxuICAgIGlmIChtb2RlLmlzT25BbGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaXNTdWJtaXR0ZWQgJiYgbW9kZS5pc09uVG91Y2gpIHtcclxuICAgICAgICByZXR1cm4gIShpc1RvdWNoZWQgfHwgaXNCbHVyRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyByZVZhbGlkYXRlTW9kZS5pc09uQmx1ciA6IG1vZGUuaXNPbkJsdXIpIHtcclxuICAgICAgICByZXR1cm4gIWlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyByZVZhbGlkYXRlTW9kZS5pc09uQ2hhbmdlIDogbW9kZS5pc09uQ2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XG5cbnZhciB1bnNldEVtcHR5QXJyYXkgPSAocmVmLCBuYW1lKSA9PiAhY29tcGFjdChnZXQocmVmLCBuYW1lLCBbXSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xuXG52YXIgaXNNZXNzYWdlID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgfHwgUmVhY3QuaXNWYWxpZEVsZW1lbnQodmFsdWUpO1xuXG52YXIgaXNSZWdleCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHA7XG5cbmZ1bmN0aW9uIGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCByZWYsIHR5cGUgPSAndmFsaWRhdGUnKSB7XHJcbiAgICBpZiAoaXNNZXNzYWdlKHJlc3VsdCkgfHxcclxuICAgICAgICAoQXJyYXkuaXNBcnJheShyZXN1bHQpICYmIHJlc3VsdC5ldmVyeShpc01lc3NhZ2UpKSB8fFxyXG4gICAgICAgIChpc0Jvb2xlYW4ocmVzdWx0KSAmJiAhcmVzdWx0KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzTWVzc2FnZShyZXN1bHQpID8gcmVzdWx0IDogJycsXHJcbiAgICAgICAgICAgIHJlZixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cbnZhciBnZXRWYWx1ZUFuZE1lc3NhZ2UgPSAodmFsaWRhdGlvbkRhdGEpID0+IGlzT2JqZWN0KHZhbGlkYXRpb25EYXRhKSAmJiAhaXNSZWdleCh2YWxpZGF0aW9uRGF0YSlcclxuICAgID8gdmFsaWRhdGlvbkRhdGFcclxuICAgIDoge1xyXG4gICAgICAgIHZhbHVlOiB2YWxpZGF0aW9uRGF0YSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgIH07XG5cbnZhciB2YWxpZGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkLCBpbnB1dFZhbHVlLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIHNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHsgcmVmLCByZWZzLCByZXF1aXJlZCwgbWF4TGVuZ3RoLCBtaW5MZW5ndGgsIG1pbiwgbWF4LCBwYXR0ZXJuLCB2YWxpZGF0ZSwgbmFtZSwgdmFsdWVBc051bWJlciwgbW91bnQsIGRpc2FibGVkLCB9ID0gZmllbGQuX2Y7XHJcbiAgICBpZiAoIW1vdW50IHx8IGRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSByZWZzID8gcmVmc1swXSA6IHJlZjtcclxuICAgIGNvbnN0IHNldEN1c3RvbVZhbGlkdHkgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzaG91bGRVc2VOYXRpdmVWYWxpZGF0aW9uICYmIGlucHV0UmVmLnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLnNldEN1c3RvbVZhbGlkaXR5KGlzQm9vbGVhbihtZXNzYWdlKSA/ICcnIDogbWVzc2FnZSB8fCAnICcpO1xyXG4gICAgICAgICAgICBpbnB1dFJlZi5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgY29uc3QgaXNSYWRpbyA9IGlzUmFkaW9JbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNDaGVja0JveCA9IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvIHx8IGlzQ2hlY2tCb3g7XHJcbiAgICBjb25zdCBpc0VtcHR5ID0gKCh2YWx1ZUFzTnVtYmVyIHx8IGlzRmlsZUlucHV0KHJlZikpICYmICFyZWYudmFsdWUpIHx8XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9PT0gJycgfHxcclxuICAgICAgICAoQXJyYXkuaXNBcnJheShpbnB1dFZhbHVlKSAmJiAhaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgY29uc3QgYXBwZW5kRXJyb3JzQ3VycnkgPSBhcHBlbmRFcnJvcnMuYmluZChudWxsLCBuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9yKTtcclxuICAgIGNvbnN0IGdldE1pbk1heE1lc3NhZ2UgPSAoZXhjZWVkTWF4LCBtYXhMZW5ndGhNZXNzYWdlLCBtaW5MZW5ndGhNZXNzYWdlLCBtYXhUeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXhMZW5ndGgsIG1pblR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbkxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlZWRNYXggPyBtYXhMZW5ndGhNZXNzYWdlIDogbWluTGVuZ3RoTWVzc2FnZTtcclxuICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBleGNlZWRNYXggPyBtYXhUeXBlIDogbWluVHlwZSwgbWVzc2FnZSxcclxuICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpb09yQ2hlY2tib3ggJiYgKGlzRW1wdHkgfHwgaXNOdWxsT3JVbmRlZmluZWQoaW5wdXRWYWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKGlucHV0VmFsdWUpICYmICFpbnB1dFZhbHVlKSB8fFxyXG4gICAgICAgICAgICAoaXNDaGVja0JveCAmJiAhZ2V0Q2hlY2tib3hWYWx1ZShyZWZzKS5pc1ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAoaXNSYWRpbyAmJiAhZ2V0UmFkaW9WYWx1ZShyZWZzKS5pc1ZhbGlkKSkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBtZXNzYWdlIH0gPSBpc01lc3NhZ2UocmVxdWlyZWQpXHJcbiAgICAgICAgICAgID8geyB2YWx1ZTogISFyZXF1aXJlZCwgbWVzc2FnZTogcmVxdWlyZWQgfVxyXG4gICAgICAgICAgICA6IGdldFZhbHVlQW5kTWVzc2FnZShyZXF1aXJlZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2UsIHJlZjogaW5wdXRSZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWR0eShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNFbXB0eSAmJiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbikgfHwgIWlzTnVsbE9yVW5kZWZpbmVkKG1heCkpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IG1heE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXgpO1xyXG4gICAgICAgIGNvbnN0IG1pbk91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW4pO1xyXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCBwYXJzZUZsb2F0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlTnVtYmVyID4gbWF4T3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5PdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlRGF0ZSA9IHJlZi52YWx1ZUFzRGF0ZSB8fCBuZXcgRGF0ZShpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlRGF0ZSA+IG5ldyBEYXRlKG1heE91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pbk91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4Y2VlZE1heCB8fCBleGNlZWRNaW4pIHtcclxuICAgICAgICAgICAgZ2V0TWluTWF4TWVzc2FnZSghIWV4Y2VlZE1heCwgbWF4T3V0cHV0Lm1lc3NhZ2UsIG1pbk91dHB1dC5tZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tVmFsaWR0eShlcnJvcltuYW1lXS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkgJiYgIWlzRW1wdHkgJiYgaXNTdHJpbmcoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICBjb25zdCBtYXhMZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4TGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBtaW5MZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA+IG1heExlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBleGNlZWRNaW4gPSAhaXNOdWxsT3JVbmRlZmluZWQobWluTGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKGV4Y2VlZE1heCwgbWF4TGVuZ3RoT3V0cHV0Lm1lc3NhZ2UsIG1pbkxlbmd0aE91dHB1dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkoZXJyb3JbbmFtZV0ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGF0dGVybiAmJiAhaXNFbXB0eSAmJiBpc1N0cmluZyhpbnB1dFZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHBhdHRlcm5WYWx1ZSwgbWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChpc1JlZ2V4KHBhdHRlcm5WYWx1ZSkgJiYgIWlucHV0VmFsdWUubWF0Y2gocGF0dGVyblZhbHVlKSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXN0b21WYWxpZHR5KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIGlucHV0UmVmKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy52YWxpZGF0ZSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkgJiYgIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IoYXdhaXQgdmFsaWRhdGVba2V5XShpbnB1dFZhbHVlKSwgaW5wdXRSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVZhbGlkdHkodmFsaWRhdGVFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGlucHV0UmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21WYWxpZHR5KHRydWUpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIG1vZGU6IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIHJlVmFsaWRhdGVNb2RlOiBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsXHJcbiAgICBzaG91bGRGb2N1c0Vycm9yOiB0cnVlLFxyXG59O1xyXG5jb25zdCBpc1dpbmRvd1VuZGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQ29udHJvbChwcm9wcyA9IHt9KSB7XHJcbiAgICBsZXQgZm9ybU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgcHJvcHMpO1xyXG4gICAgbGV0IF9kZWxheUNhbGxiYWNrO1xyXG4gICAgbGV0IF9mb3JtU3RhdGUgPSB7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfTtcclxuICAgIGxldCBfZmllbGRzID0ge307XHJcbiAgICBsZXQgX2Zvcm1WYWx1ZXMgPSB7fTtcclxuICAgIGxldCBfZGVmYXVsdFZhbHVlcyA9IGZvcm1PcHRpb25zLmRlZmF1bHRWYWx1ZXMgfHwge307XHJcbiAgICBsZXQgX2lzSW5BY3Rpb24gPSBmYWxzZTtcclxuICAgIGxldCBfaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICBsZXQgX3RpbWVyID0gMDtcclxuICAgIGxldCBfbmFtZXMgPSB7XHJcbiAgICAgICAgbW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICB1bk1vdW50OiBuZXcgU2V0KCksXHJcbiAgICAgICAgYXJyYXk6IG5ldyBTZXQoKSxcclxuICAgICAgICB3YXRjaDogbmV3IFNldCgpLFxyXG4gICAgfTtcclxuICAgIGxldCBfdmFsaWRhdGVDb3VudCA9IHt9O1xyXG4gICAgY29uc3QgX3Byb3h5Rm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGlzRGlydHk6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiBmYWxzZSxcclxuICAgICAgICB0b3VjaGVkRmllbGRzOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yczogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3N1YmplY3RzID0ge1xyXG4gICAgICAgIHdhdGNoOiBuZXcgU3ViamVjdCgpLFxyXG4gICAgICAgIGNvbnRyb2w6IG5ldyBTdWJqZWN0KCksXHJcbiAgICAgICAgYXJyYXk6IG5ldyBTdWJqZWN0KCksXHJcbiAgICAgICAgc3RhdGU6IG5ldyBTdWJqZWN0KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbk1vZGUgPSBnZXRWYWxpZGF0aW9uTW9kZXMoZm9ybU9wdGlvbnMubW9kZSk7XHJcbiAgICBjb25zdCByZVZhbGlkYXRlTW9kZSA9IGdldFZhbGlkYXRpb25Nb2Rlcyhmb3JtT3B0aW9ucy5yZVZhbGlkYXRlTW9kZSk7XHJcbiAgICBjb25zdCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSA9IGZvcm1PcHRpb25zLmNyaXRlcmlhTW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbDtcclxuICAgIGNvbnN0IGRlYm91bmNlID0gKGNhbGxiYWNrLCB3YWl0KSA9PiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChfdGltZXIpO1xyXG4gICAgICAgIF90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpc0ZpZWxkV2F0Y2hlZCA9IChuYW1lKSA9PiBfbmFtZXMud2F0Y2hBbGwgfHxcclxuICAgICAgICBfbmFtZXMud2F0Y2guaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgX25hbWVzLndhdGNoLmhhcygobmFtZS5tYXRjaCgvXFx3Ky8pIHx8IFtdKVswXSk7XHJcbiAgICBjb25zdCB1cGRhdGVFcnJvclN0YXRlID0gKG5hbWUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IF9mb3JtU3RhdGUuZXJyb3JzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3VsZFJlbmRlckJhc2VPbkVycm9yID0gYXN5bmMgKHNob3VsZFNraXBSZW5kZXIsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNFcnJvciA9IGdldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlVmFsaWQgPSBfcHJveHlGb3JtU3RhdGUuaXNWYWxpZCAmJiBfZm9ybVN0YXRlLmlzVmFsaWQgIT09IGlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKHByb3BzLmRlbGF5RXJyb3IgJiYgZXJyb3IpIHtcclxuICAgICAgICAgICAgX2RlbGF5Q2FsbGJhY2sgPVxyXG4gICAgICAgICAgICAgICAgX2RlbGF5Q2FsbGJhY2sgfHwgZGVib3VuY2UodXBkYXRlRXJyb3JTdGF0ZSwgcHJvcHMuZGVsYXlFcnJvcik7XHJcbiAgICAgICAgICAgIF9kZWxheUNhbGxiYWNrKG5hbWUsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGltZXIpO1xyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoKGVycm9yID8gIWRlZXBFcXVhbChwcmV2aW91c0Vycm9yLCBlcnJvcikgOiBwcmV2aW91c0Vycm9yKSB8fFxyXG4gICAgICAgICAgICAhaXNFbXB0eU9iamVjdChmaWVsZFN0YXRlKSB8fFxyXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVWYWxpZCkgJiZcclxuICAgICAgICAgICAgIXNob3VsZFNraXBSZW5kZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZvcm1TdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZFN0YXRlKSwgKHNob3VsZFVwZGF0ZVZhbGlkID8geyBpc1ZhbGlkIH0gOiB7fSkpLCB7IGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUgfSk7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtU3RhdGUpLCB1cGRhdGVkRm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQodXBkYXRlZEZvcm1TdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF92YWxpZGF0ZUNvdW50W25hbWVdLS07XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkYXRpbmcgJiYgIV92YWxpZGF0ZUNvdW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfdmFsaWRhdGVDb3VudCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30sIHNob3VsZFJlbmRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBjb25zdCBfZiA9IGZpZWxkLl9mO1xyXG4gICAgICAgICAgICBpZiAoX2YpIHtcclxuICAgICAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgZ2V0RmllbGRWYWx1ZUFzKHZhbHVlLCBfZikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGlzV2ViICYmIGlzSFRNTEVsZW1lbnQoX2YucmVmKSAmJiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVJbnB1dChfZi5yZWYpICYmICFpc1N0cmluZyhmaWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnJlZi5maWxlcyA9IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc011bHRpcGxlU2VsZWN0KF9mLnJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBbLi4uX2YucmVmLm9wdGlvbnNdLmZvckVhY2goKHNlbGVjdFJlZikgPT4gKHNlbGVjdFJlZi5zZWxlY3RlZCA9IGZpZWxkVmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2YucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQoX2YucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZi5yZWZzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2YucmVmcy5mb3JFYWNoKChjaGVja2JveFJlZikgPT4gKGNoZWNrYm94UmVmLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KGZpZWxkVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAhIWZpZWxkVmFsdWUuZmluZCgoZGF0YSkgPT4gZGF0YSA9PT0gY2hlY2tib3hSZWYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZFZhbHVlID09PSBjaGVja2JveFJlZi52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChfZi5yZWZzWzBdLmNoZWNrZWQgPSAhIWZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2YucmVmcy5mb3JFYWNoKChyYWRpb1JlZikgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gZmllbGRWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mLnJlZi52YWx1ZSA9IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUmVuZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3N1YmplY3RzLmNvbnRyb2wubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogZ2V0VmFsdWVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5zaG91bGREaXJ0eSB8fCBvcHRpb25zLnNob3VsZFRvdWNoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRvdWNoQW5kRGlydHlTdGF0ZShuYW1lLCBmaWVsZFZhbHVlLCBvcHRpb25zLnNob3VsZFRvdWNoKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvdWxkVmFsaWRhdGUgJiYgdHJpZ2dlcihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCB1cGRhdGVUb3VjaEFuZERpcnR5U3RhdGUgPSAobmFtZSwgaW5wdXRWYWx1ZSwgaXNDdXJyZW50VG91Y2hlZCwgc2hvdWxkUmVuZGVyID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGlzQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChfcHJveHlGb3JtU3RhdGUuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0lzRGlydHkgPSBfZm9ybVN0YXRlLmlzRGlydHk7XHJcbiAgICAgICAgICAgIF9mb3JtU3RhdGUuaXNEaXJ0eSA9IF9nZXRJc0RpcnR5KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzRGlydHkgPSBfZm9ybVN0YXRlLmlzRGlydHk7XHJcbiAgICAgICAgICAgIGlzQ2hhbmdlZCA9IHByZXZpb3VzSXNEaXJ0eSAhPT0gc3RhdGUuaXNEaXJ0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5kaXJ0eUZpZWxkcyAmJiAhaXNDdXJyZW50VG91Y2hlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ByZXZpb3VzRmllbGREaXJ0eSA9IGdldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50RmllbGREaXJ0eSA9ICFkZWVwRXF1YWwoZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lKSwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlzQ3VycmVudEZpZWxkRGlydHlcclxuICAgICAgICAgICAgICAgID8gc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kaXJ0eUZpZWxkcyA9IF9mb3JtU3RhdGUuZGlydHlGaWVsZHM7XHJcbiAgICAgICAgICAgIGlzQ2hhbmdlZCA9XHJcbiAgICAgICAgICAgICAgICBpc0NoYW5nZWQgfHwgaXNQcmV2aW91c0ZpZWxkRGlydHkgIT09IGdldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNQcmV2aW91c0ZpZWxkVG91Y2hlZCA9IGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChpc0N1cnJlbnRUb3VjaGVkICYmICFpc1ByZXZpb3VzRmllbGRUb3VjaGVkKSB7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUsIGlzQ3VycmVudFRvdWNoZWQpO1xyXG4gICAgICAgICAgICBzdGF0ZS50b3VjaGVkRmllbGRzID0gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzO1xyXG4gICAgICAgICAgICBpc0NoYW5nZWQgPVxyXG4gICAgICAgICAgICAgICAgaXNDaGFuZ2VkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKF9wcm94eUZvcm1TdGF0ZS50b3VjaGVkRmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJldmlvdXNGaWVsZFRvdWNoZWQgIT09IGlzQ3VycmVudFRvdWNoZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0NoYW5nZWQgJiYgc2hvdWxkUmVuZGVyICYmIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHN0YXRlKTtcclxuICAgICAgICByZXR1cm4gaXNDaGFuZ2VkID8gc3RhdGUgOiB7fTtcclxuICAgIH07XHJcbiAgICBjb25zdCBleGVjdXRlUmVzb2x2ZXIgPSBhc3luYyAobmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmb3JtT3B0aW9ucy5yZXNvbHZlclxyXG4gICAgICAgICAgICA/IGF3YWl0IGZvcm1PcHRpb25zLnJlc29sdmVyKE9iamVjdC5hc3NpZ24oe30sIF9mb3JtVmFsdWVzKSwgZm9ybU9wdGlvbnMuY29udGV4dCwgZ2V0UmVzb2x2ZXJPcHRpb25zKG5hbWUgfHwgX25hbWVzLm1vdW50LCBfZmllbGRzLCBmb3JtT3B0aW9ucy5jcml0ZXJpYU1vZGUsIGZvcm1PcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKVxyXG4gICAgICAgICAgICA6IHt9O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGV4ZWN1dGVSZXNvbHZlclZhbGlkYXRpb24gPSBhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgZXhlY3V0ZVJlc29sdmVyKCk7XHJcbiAgICAgICAgaWYgKG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdW5zZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlLmVycm9ycyA9IGVycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgIH07XHJcbiAgICBjb25zdCB2YWxpZGF0ZUZvcm0gPSBhc3luYyAoX2ZpZWxkcywgc2hvdWxkQ2hlY2tWYWxpZCwgY29udGV4dCA9IHtcclxuICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgIH0pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gX2ZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IF9maWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX2YgPSBmaWVsZC5fZjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBvbWl0KGZpZWxkLCAnX2YnKTtcclxuICAgICAgICAgICAgICAgIGlmIChfZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3IgPSBhd2FpdCB2YWxpZGF0ZUZpZWxkKGZpZWxkLCBnZXQoX2Zvcm1WYWx1ZXMsIF9mLm5hbWUpLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZm9ybU9wdGlvbnMuc2hvdWxkVXNlTmF0aXZlVmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbX2YubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkQ2hlY2tWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG91bGRDaGVja1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JbX2YubmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBfZi5uYW1lLCBmaWVsZEVycm9yW19mLm5hbWVdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNldChfZm9ybVN0YXRlLmVycm9ycywgX2YubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChhd2FpdCB2YWxpZGF0ZUZvcm0oZmllbGRWYWx1ZSwgc2hvdWxkQ2hlY2tWYWxpZCwgY29udGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LnZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh7IHR5cGUsIHRhcmdldCwgdGFyZ2V0OiB7IHZhbHVlLCBuYW1lLCB0eXBlOiBpbnB1dFR5cGUgfSwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRUeXBlID8gZ2V0RmllbGRWYWx1ZShmaWVsZC5fZikgOiB2YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgaXNCbHVyRXZlbnQgPSB0eXBlID09PSBFVkVOVFMuQkxVUjtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcFZhbGlkYXRpb24gPSAoIWhhc1ZhbGlkYXRpb24oZmllbGQuX2YpICYmXHJcbiAgICAgICAgICAgICAgICAhZm9ybU9wdGlvbnMucmVzb2x2ZXIgJiZcclxuICAgICAgICAgICAgICAgICFnZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAhZmllbGQuX2YuZGVwcykgfHxcclxuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uKGlzQmx1ckV2ZW50LCBnZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKSwgX2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZCwgcmVWYWxpZGF0ZU1vZGUsIHZhbGlkYXRpb25Nb2RlKTtcclxuICAgICAgICAgICAgY29uc3QgaXNXYXRjaGVkID0gIWlzQmx1ckV2ZW50ICYmIGlzRmllbGRXYXRjaGVkKG5hbWUpO1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFN0YXRlID0gdXBkYXRlVG91Y2hBbmREaXJ0eVN0YXRlKG5hbWUsIGlucHV0VmFsdWUsIGlzQmx1ckV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJlbmRlciA9ICFpc0VtcHR5T2JqZWN0KGZpZWxkU3RhdGUpIHx8IGlzV2F0Y2hlZDtcclxuICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmXHJcbiAgICAgICAgICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTa2lwVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzaG91bGRSZW5kZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKHsgbmFtZSB9LCAoaXNXYXRjaGVkID8ge30gOiBmaWVsZFN0YXRlKSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgaXNXYXRjaGVkICYmIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHt9KTtcclxuICAgICAgICAgICAgX3ZhbGlkYXRlQ291bnRbbmFtZV0gPSBfdmFsaWRhdGVDb3VudFtuYW1lXSA/ICsxIDogMTtcclxuICAgICAgICAgICAgX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWRhdGluZyAmJlxyXG4gICAgICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZm9ybU9wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCBleGVjdXRlUmVzb2x2ZXIoW25hbWVdKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGVja0JveElucHV0KHRhcmdldCkgJiYgIWVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBnZXROb2RlUGFyZW50TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRGaWVsZCA9IGdldChfZmllbGRzLCBwYXJlbnROb2RlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyZW50RmllbGQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudEZpZWxkLmV2ZXJ5KChmaWVsZCkgPT4gZmllbGQuX2YgJiYgaXNDaGVja0JveElucHV0KGZpZWxkLl9mLnJlZikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEVycm9yID0gZ2V0KGVycm9ycywgcGFyZW50Tm9kZU5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RXJyb3IudHlwZSAmJiAoZXJyb3IgPSBwYXJlbnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJlbnROb2RlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZCwgZ2V0KF9mb3JtVmFsdWVzLCBuYW1lKSwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZvcm1PcHRpb25zLnNob3VsZFVzZU5hdGl2ZVZhbGlkYXRpb24pKVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBhd2FpdCBfdXBkYXRlVmFsaWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpZWxkLl9mLmRlcHMpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXIoZmllbGQuX2YuZGVwcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IoZmFsc2UsIG5hbWUsIGlzVmFsaWQsIGVycm9yLCBmaWVsZFN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX3VwZGF0ZVZhbGlkQW5kSW5wdXRWYWx1ZSA9IChuYW1lLCByZWYsIHNob3VsZFNraXBWYWx1ZUFzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBpc1VuZGVmaW5lZChmaWVsZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAocmVmICYmIHJlZi5kZWZhdWx0Q2hlY2tlZCkgfHxcclxuICAgICAgICAgICAgICAgIHNob3VsZFNraXBWYWx1ZUFzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIHNob3VsZFNraXBWYWx1ZUFzID8gZGVmYXVsdFZhbHVlIDogZ2V0RmllbGRWYWx1ZShmaWVsZC5fZikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9pc01vdW50ZWQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgX2dldElzRGlydHkgPSAobmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIG5hbWUgJiYgZGF0YSAmJiBzZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiAhZGVlcEVxdWFsKE9iamVjdC5hc3NpZ24oe30sIGdldFZhbHVlcygpKSwgX2RlZmF1bHRWYWx1ZXMpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IF91cGRhdGVWYWxpZCA9IGFzeW5jIChza2lwUmVuZGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZvcm1PcHRpb25zLnJlc29sdmVyXHJcbiAgICAgICAgICAgICAgICA/IGlzRW1wdHlPYmplY3QoKGF3YWl0IGV4ZWN1dGVSZXNvbHZlcigpKS5lcnJvcnMpXHJcbiAgICAgICAgICAgICAgICA6IGF3YWl0IHZhbGlkYXRlRm9ybShfZmllbGRzLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFza2lwUmVuZGVyICYmIGlzVmFsaWQgIT09IF9mb3JtU3RhdGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0VmFsdWVzID0gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSA9PiBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2ZpZWxkS2V5LCBmaWVsZFZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGAke25hbWV9LiR7ZmllbGRLZXl9YDtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgIChfbmFtZXMuYXJyYXkuaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICFpc1ByaW1pdGl2ZShmaWVsZFZhbHVlKSB8fFxyXG4gICAgICAgICAgICAoZmllbGQgJiYgIWZpZWxkLl9mKSkgJiZcclxuICAgICAgICAgICAgIWlzRGF0ZU9iamVjdChmaWVsZFZhbHVlKVxyXG4gICAgICAgICAgICA/IHNldFZhbHVlcyhmaWVsZE5hbWUsIGZpZWxkVmFsdWUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIDogc2V0RmllbGRWYWx1ZShmaWVsZE5hbWUsIGZpZWxkVmFsdWUsIG9wdGlvbnMsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBfZ2V0V2F0Y2ggPSAoZmllbGROYW1lcywgZGVmYXVsdFZhbHVlLCBpc01vdW50ZWQsIGlzR2xvYmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAoaXNNb3VudGVkIHx8IF9pc01vdW50ZWRcclxuICAgICAgICAgICAgPyBfZm9ybVZhbHVlc1xyXG4gICAgICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgICAgID8gX2RlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgIDogaXNTdHJpbmcoZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgICAgICA/IHsgW2ZpZWxkTmFtZXNdOiBkZWZhdWx0VmFsdWUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlKSk7XHJcbiAgICAgICAgaWYgKCFmaWVsZE5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlzR2xvYmFsICYmIChfbmFtZXMud2F0Y2hBbGwgPSB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkVmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBvZiBjb252ZXJ0VG9BcnJheVBheWxvYWQoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgaXNHbG9iYWwgJiYgX25hbWVzLndhdGNoLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChnZXQoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKSA/IHJlc3VsdCA6IHJlc3VsdFswXTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfdXBkYXRlVmFsdWVzID0gKGRlZmF1bHRWYWx1ZXMsIG5hbWUgPSAnJykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkZWZhdWx0VmFsdWVzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IG5hbWUgKyAobmFtZSA/ICcuJyA6ICcnKSArIGtleTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhZmllbGQuX2YpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaXNPYmplY3QodmFsdWUpICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdXBkYXRlVmFsdWVzKHZhbHVlLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBmaWVsZE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBfdXBkYXRlRmllbGRBcnJheSA9IChrZXlOYW1lLCBuYW1lLCBtZXRob2QsIGFyZ3MsIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzV2l0aEtleSA9IFtdLCBzaG91bGRTZXQgPSB0cnVlLCBzaG91bGRTZXRGaWVsZHMgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgbGV0IG91dHB1dDtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXNXaXRoS2V5LCBrZXlOYW1lKTtcclxuICAgICAgICBfaXNJbkFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgaWYgKHNob3VsZFNldEZpZWxkcyAmJiBnZXQoX2ZpZWxkcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gbWV0aG9kKGdldChfZmllbGRzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KF9maWVsZHMsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dCA9IG1ldGhvZChnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgc2hvdWxkU2V0ICYmIHNldChfZm9ybVZhbHVlcywgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShnZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICB1bnNldEVtcHR5QXJyYXkoX2Zvcm1TdGF0ZS5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3Byb3h5Rm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMgJiYgZ2V0KF9mb3JtU3RhdGUudG91Y2hlZEZpZWxkcywgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICB1bnNldEVtcHR5QXJyYXkoX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9wcm94eUZvcm1TdGF0ZS5kaXJ0eUZpZWxkcyB8fCBfcHJveHlGb3JtU3RhdGUuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBzZXQoX2Zvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGtleU5hbWUpLCBnZXQoX2RlZmF1bHRWYWx1ZXMsIG5hbWUsIFtdKSwgZ2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgICAgICB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyAmJlxyXG4gICAgICAgICAgICAgICAgc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyhvbWl0S2V5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBrZXlOYW1lKSwgZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBbXSksIGdldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lLCBbXSkpKTtcclxuICAgICAgICAgICAgdW5zZXRFbXB0eUFycmF5KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzRGlydHk6IF9nZXRJc0RpcnR5KG5hbWUsIG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMsIGtleU5hbWUpKSxcclxuICAgICAgICAgICAgZGlydHlGaWVsZHM6IF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IF9mb3JtU3RhdGUuaXNWYWxpZCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBfZ2V0RmllbGRBcnJheVZhbHVlID0gKG5hbWUpID0+IGdldChfaXNNb3VudGVkID8gX2Zvcm1WYWx1ZXMgOiBfZGVmYXVsdFZhbHVlcywgbmFtZSwgW10pO1xyXG4gICAgY29uc3Qgc2V0VmFsdWUgPSAobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGlzRmllbGRBcnJheSA9IF9uYW1lcy5hcnJheS5oYXMobmFtZSk7XHJcbiAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGlzRmllbGRBcnJheSkge1xyXG4gICAgICAgICAgICBfc3ViamVjdHMuYXJyYXkubmV4dCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBfZm9ybVZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICgoX3Byb3h5Rm9ybVN0YXRlLmlzRGlydHkgfHwgX3Byb3h5Rm9ybVN0YXRlLmRpcnR5RmllbGRzKSAmJlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zaG91bGREaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyh2YWx1ZSwgZ2V0KF9kZWZhdWx0VmFsdWVzLCBuYW1lLCBbXSksIGdldChfZm9ybVN0YXRlLmRpcnR5RmllbGRzLCBuYW1lLCBbXSkpKTtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBfZm9ybVN0YXRlLmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlydHk6IF9nZXRJc0RpcnR5KG5hbWUsIHZhbHVlKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCAmJiAhZmllbGQuX2YgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBzZXRWYWx1ZXMobmFtZSwgdmFsdWUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICA6IHNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUsIG9wdGlvbnMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0ZpZWxkV2F0Y2hlZChuYW1lKSAmJiBfc3ViamVjdHMuc3RhdGUubmV4dCh7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLndhdGNoLm5leHQoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSBhc3luYyAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKTtcclxuICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZm9ybU9wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hUmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVJlc29sdmVyVmFsaWRhdGlvbihpc1VuZGVmaW5lZChuYW1lKSA/IG5hbWUgOiBmaWVsZE5hbWVzKTtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IG5hbWVcclxuICAgICAgICAgICAgICAgID8gZmllbGROYW1lcy5ldmVyeSgobmFtZSkgPT4gIWdldChzY2hlbWFSZXN1bHQsIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBpc0VtcHR5T2JqZWN0KHNjaGVtYVJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IChhd2FpdCBQcm9taXNlLmFsbChmaWVsZE5hbWVzLm1hcChhc3luYyAoZmllbGROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdmFsaWRhdGVGb3JtKGZpZWxkLl9mID8geyBbZmllbGROYW1lXTogZmllbGQgfSA6IGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH0pKSkuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgICAgICAgICBfdXBkYXRlVmFsaWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBhd2FpdCB2YWxpZGF0ZUZvcm0oX2ZpZWxkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoaXNTdHJpbmcobmFtZSkgPyB7IG5hbWUgfSA6IHt9KSksIHsgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycywgaXNWYWxpZCwgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvdWxkRm9jdXMgJiYgIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgZm9jdXNGaWVsZEJ5KF9maWVsZHMsIChrZXkpID0+IGdldChfZm9ybVN0YXRlLmVycm9ycywga2V5KSwgbmFtZSA/IGZpZWxkTmFtZXMgOiBfbmFtZXMubW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRWYWx1ZXMgPSAoZmllbGROYW1lcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHRWYWx1ZXMpLCBfZm9ybVZhbHVlcyk7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGZpZWxkTmFtZXMpXHJcbiAgICAgICAgICAgID8gdmFsdWVzXHJcbiAgICAgICAgICAgIDogaXNTdHJpbmcoZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgID8gZ2V0KHZhbHVlcywgZmllbGROYW1lcylcclxuICAgICAgICAgICAgICAgIDogZmllbGROYW1lcy5tYXAoKG5hbWUpID0+IGdldCh2YWx1ZXMsIG5hbWUpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjbGVhckVycm9ycyA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICA/IGNvbnZlcnRUb0FycmF5UGF5bG9hZChuYW1lKS5mb3JFYWNoKChpbnB1dE5hbWUpID0+IHVuc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBpbnB1dE5hbWUpKVxyXG4gICAgICAgICAgICA6IChfZm9ybVN0YXRlLmVycm9ycyA9IHt9KTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2V0RXJyb3IgPSAobmFtZSwgZXJyb3IsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zdCByZWYgPSAoZ2V0KF9maWVsZHMsIG5hbWUsIHsgX2Y6IHt9IH0pLl9mIHx8IHt9KS5yZWY7XHJcbiAgICAgICAgc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBuYW1lLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSwgeyByZWYgfSkpO1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZXJyb3JzOiBfZm9ybVN0YXRlLmVycm9ycyxcclxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnNob3VsZEZvY3VzICYmIHJlZiAmJiByZWYuZm9jdXMgJiYgcmVmLmZvY3VzKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgd2F0Y2ggPSAoZmllbGROYW1lLCBkZWZhdWx0VmFsdWUpID0+IGlzRnVuY3Rpb24oZmllbGROYW1lKVxyXG4gICAgICAgID8gX3N1YmplY3RzLndhdGNoLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChpbmZvKSA9PiBmaWVsZE5hbWUoX2dldFdhdGNoKHVuZGVmaW5lZCwgZGVmYXVsdFZhbHVlKSwgaW5mbyksXHJcbiAgICAgICAgfSlcclxuICAgICAgICA6IF9nZXRXYXRjaChmaWVsZE5hbWUsIGRlZmF1bHRWYWx1ZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgY29uc3QgdW5yZWdpc3RlciA9IChuYW1lLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBvZiBuYW1lID8gY29udmVydFRvQXJyYXlQYXlsb2FkKG5hbWUpIDogX25hbWVzLm1vdW50KSB7XHJcbiAgICAgICAgICAgIF9uYW1lcy5tb3VudC5kZWxldGUoaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgX25hbWVzLmFycmF5LmRlbGV0ZShpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZ2V0KF9maWVsZHMsIGlucHV0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5rZWVwVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChfZmllbGRzLCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KF9mb3JtVmFsdWVzLCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcEVycm9yICYmIHVuc2V0KF9mb3JtU3RhdGUuZXJyb3JzLCBpbnB1dE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgIW9wdGlvbnMua2VlcERpcnR5ICYmIHVuc2V0KF9mb3JtU3RhdGUuZGlydHlGaWVsZHMsIGlucHV0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAhb3B0aW9ucy5rZWVwVG91Y2hlZCAmJiB1bnNldChfZm9ybVN0YXRlLnRvdWNoZWRGaWVsZHMsIGlucHV0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAhZm9ybU9wdGlvbnMuc2hvdWxkVW5yZWdpc3RlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFvcHRpb25zLmtlZXBEZWZhdWx0VmFsdWUgJiZcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChfZGVmYXVsdFZhbHVlcywgaW5wdXROYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7fSk7XHJcbiAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfZm9ybVN0YXRlKSwgKCFvcHRpb25zLmtlZXBEaXJ0eSA/IHt9IDogeyBpc0RpcnR5OiBfZ2V0SXNEaXJ0eSgpIH0pKSk7XHJcbiAgICAgICAgIW9wdGlvbnMua2VlcElzVmFsaWQgJiYgX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVnaXN0ZXJGaWVsZFJlZiA9IChuYW1lLCBmaWVsZFJlZiwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHJlZ2lzdGVyKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGxldCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICBjb25zdCByZWYgPSBpc1VuZGVmaW5lZChmaWVsZFJlZi52YWx1ZSlcclxuICAgICAgICAgICAgPyBmaWVsZFJlZi5xdWVyeVNlbGVjdG9yQWxsXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkUmVmLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpWzBdIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRSZWZcclxuICAgICAgICAgICAgICAgIDogZmllbGRSZWZcclxuICAgICAgICAgICAgOiBmaWVsZFJlZjtcclxuICAgICAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKTtcclxuICAgICAgICBpZiAocmVmID09PSBmaWVsZC5fZi5yZWYgfHxcclxuICAgICAgICAgICAgKGlzUmFkaW9PckNoZWNrYm94ICYmXHJcbiAgICAgICAgICAgICAgICBjb21wYWN0KGZpZWxkLl9mLnJlZnMgfHwgW10pLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSByZWYpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkID0ge1xyXG4gICAgICAgICAgICBfZjogaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZC5fZiksIHsgcmVmczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb21wYWN0KGZpZWxkLl9mLnJlZnMgfHwgW10pLmZpbHRlcigocmVmKSA9PiBpc0hUTUxFbGVtZW50KHJlZikgJiYgZG9jdW1lbnQuY29udGFpbnMocmVmKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICBdLCByZWY6IHsgdHlwZTogcmVmLnR5cGUsIG5hbWUgfSB9KSA6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQuX2YpLCB7IHJlZiB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldChfZmllbGRzLCBuYW1lLCBmaWVsZCk7XHJcbiAgICAgICAgKCFvcHRpb25zIHx8ICFvcHRpb25zLmRpc2FibGVkKSAmJiBfdXBkYXRlVmFsaWRBbmRJbnB1dFZhbHVlKG5hbWUsIHJlZik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBnZXQoX2ZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgc2V0KF9maWVsZHMsIG5hbWUsIHtcclxuICAgICAgICAgICAgX2Y6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZmllbGQgJiYgZmllbGQuX2YgPyBmaWVsZC5fZiA6IHsgcmVmOiB7IG5hbWUgfSB9KSksIHsgbmFtZSwgbW91bnQ6IHRydWUgfSksIG9wdGlvbnMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldChfZm9ybVZhbHVlcywgbmFtZSwgb3B0aW9ucy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0Jvb2xlYW4ob3B0aW9ucy5kaXNhYmxlZCkgJiYgZmllbGQpIHtcclxuICAgICAgICAgICAgc2V0KF9mb3JtVmFsdWVzLCBuYW1lLCBvcHRpb25zLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgOiBnZXQoX2Zvcm1WYWx1ZXMsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGQuX2YpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9uYW1lcy5tb3VudC5hZGQobmFtZSk7XHJcbiAgICAgICAgIWZpZWxkICYmIF91cGRhdGVWYWxpZEFuZElucHV0VmFsdWUobmFtZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gaXNXaW5kb3dVbmRlZmluZWRcclxuICAgICAgICAgICAgPyB7IG5hbWU6IG5hbWUgfVxyXG4gICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG5hbWUgfSwgKGlzVW5kZWZpbmVkKG9wdGlvbnMuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICA/IHt9XHJcbiAgICAgICAgICAgICAgICA6IHsgZGlzYWJsZWQ6IG9wdGlvbnMuZGlzYWJsZWQgfSkpLCB7IG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIG9uQmx1cjogaGFuZGxlQ2hhbmdlLCByZWY6IChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGRSZWYobmFtZSwgcmVmLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3Nob3VsZFVucmVnaXN0ZXIgPSBmb3JtT3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyIHx8IG9wdGlvbnMuc2hvdWxkVW5yZWdpc3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLl9mKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fZi5tb3VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zaG91bGRVbnJlZ2lzdGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKGlzTmFtZUluRmllbGRBcnJheShfbmFtZXMuYXJyYXksIG5hbWUpICYmIF9pc0luQWN0aW9uKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX25hbWVzLnVuTW91bnQuYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKG9uVmFsaWQsIG9uSW52YWxpZCkgPT4gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5wZXJzaXN0ICYmIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFzTm9Qcm9taXNlRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGxldCBmaWVsZFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIF9mb3JtVmFsdWVzKTtcclxuICAgICAgICBfc3ViamVjdHMuc3RhdGUubmV4dCh7XHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybU9wdGlvbnMucmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCB2YWx1ZXMgfSA9IGF3YWl0IGV4ZWN1dGVSZXNvbHZlcigpO1xyXG4gICAgICAgICAgICAgICAgX2Zvcm1TdGF0ZS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlRm9ybShfZmllbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNFbXB0eU9iamVjdChfZm9ybVN0YXRlLmVycm9ycykgJiZcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKF9mb3JtU3RhdGUuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gZ2V0KGZpZWxkVmFsdWVzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgb25WYWxpZChmaWVsZFZhbHVlcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWQgJiYgKGF3YWl0IG9uSW52YWxpZChfZm9ybVN0YXRlLmVycm9ycywgZSkpO1xyXG4gICAgICAgICAgICAgICAgZm9ybU9wdGlvbnMuc2hvdWxkRm9jdXNFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzRmllbGRCeShfZmllbGRzLCAoa2V5KSA9PiBnZXQoX2Zvcm1TdGF0ZS5lcnJvcnMsIGtleSksIF9uYW1lcy5tb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBoYXNOb1Byb21pc2VFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBfZm9ybVN0YXRlLmlzU3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3N1YmplY3RzLnN0YXRlLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBpc0VtcHR5T2JqZWN0KF9mb3JtU3RhdGUuZXJyb3JzKSAmJiBoYXNOb1Byb21pc2VFcnJvcixcclxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiBfZm9ybVN0YXRlLnN1Ym1pdENvdW50ICsgMSxcclxuICAgICAgICAgICAgICAgIGVycm9yczogX2Zvcm1TdGF0ZS5lcnJvcnMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9IChmb3JtVmFsdWVzLCBrZWVwU3RhdGVPcHRpb25zID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVmFsdWVzID0gZm9ybVZhbHVlcyB8fCBfZGVmYXVsdFZhbHVlcztcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBjbG9uZU9iamVjdCh1cGRhdGVkVmFsdWVzKTtcclxuICAgICAgICBfZm9ybVZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICBpZiAoaXNXZWIgJiYgIWtlZXBTdGF0ZU9wdGlvbnMua2VlcFZhbHVlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgX25hbWVzLm1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGdldChfZmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCAmJiBmaWVsZC5fZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UmVmID0gQXJyYXkuaXNBcnJheShmaWVsZC5fZi5yZWZzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLl9mLnJlZnNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5fZi5yZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIVE1MRWxlbWVudChpbnB1dFJlZikgJiYgaW5wdXRSZWYuY2xvc2VzdCgnZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgha2VlcFN0YXRlT3B0aW9ucy5rZWVwRGVmYXVsdFZhbHVlcykge1xyXG4gICAgICAgICAgICBfZGVmYXVsdFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHVwZGF0ZWRWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtlZXBTdGF0ZU9wdGlvbnMua2VlcFZhbHVlcykge1xyXG4gICAgICAgICAgICBfZmllbGRzID0ge307XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5jb250cm9sLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBrZWVwU3RhdGVPcHRpb25zLmtlZXBEZWZhdWx0VmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBfZGVmYXVsdFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlZFZhbHVlcyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBfc3ViamVjdHMud2F0Y2gubmV4dCh7fSk7XHJcbiAgICAgICAgICAgIF9zdWJqZWN0cy5hcnJheS5uZXh0KHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9uYW1lcyA9IHtcclxuICAgICAgICAgICAgbW91bnQ6IG5ldyBTZXQoKSxcclxuICAgICAgICAgICAgdW5Nb3VudDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICBhcnJheTogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB3YXRjaDogbmV3IFNldCgpLFxyXG4gICAgICAgICAgICB3YXRjaEFsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvY3VzOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIF9zdWJqZWN0cy5zdGF0ZS5uZXh0KHtcclxuICAgICAgICAgICAgc3VibWl0Q291bnQ6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFN1Ym1pdENvdW50XHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuc3VibWl0Q291bnRcclxuICAgICAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgICAgaXNEaXJ0eToga2VlcFN0YXRlT3B0aW9ucy5rZWVwRGlydHlcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5pc0RpcnR5XHJcbiAgICAgICAgICAgICAgICA6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERlZmF1bHRWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZXBFcXVhbChmb3JtVmFsdWVzLCBfZGVmYXVsdFZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZDoga2VlcFN0YXRlT3B0aW9ucy5rZWVwSXNTdWJtaXR0ZWRcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS5pc1N1Ym1pdHRlZFxyXG4gICAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlydHlGaWVsZHM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcERpcnR5XHJcbiAgICAgICAgICAgICAgICA/IF9mb3JtU3RhdGUuZGlydHlGaWVsZHNcclxuICAgICAgICAgICAgICAgIDoge30sXHJcbiAgICAgICAgICAgIHRvdWNoZWRGaWVsZHM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcFRvdWNoZWRcclxuICAgICAgICAgICAgICAgID8gX2Zvcm1TdGF0ZS50b3VjaGVkRmllbGRzXHJcbiAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IGtlZXBTdGF0ZU9wdGlvbnMua2VlcEVycm9yc1xyXG4gICAgICAgICAgICAgICAgPyBfZm9ybVN0YXRlLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBfaXNNb3VudGVkID0gISFrZWVwU3RhdGVPcHRpb25zLmtlZXBJc1ZhbGlkO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldEZvY3VzID0gKG5hbWUpID0+IGdldChfZmllbGRzLCBuYW1lKS5fZi5yZWYuZm9jdXMoKTtcclxuICAgIGNvbnN0IF9yZW1vdmVGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIF9uYW1lcy51bk1vdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0KF9maWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBmaWVsZCAmJlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLl9mLnJlZnMgPyBmaWVsZC5fZi5yZWZzLmV2ZXJ5KGxpdmUpIDogbGl2ZShmaWVsZC5fZi5yZWYpKSAmJlxyXG4gICAgICAgICAgICAgICAgdW5yZWdpc3RlcihuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX25hbWVzLnVuTW91bnQgPSBuZXcgU2V0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250cm9sOiB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgICAgICB1bnJlZ2lzdGVyLFxyXG4gICAgICAgICAgICBfZ2V0V2F0Y2gsXHJcbiAgICAgICAgICAgIF9nZXRJc0RpcnR5LFxyXG4gICAgICAgICAgICBfdXBkYXRlVmFsaWQsXHJcbiAgICAgICAgICAgIF91cGRhdGVWYWx1ZXMsXHJcbiAgICAgICAgICAgIF9yZW1vdmVGaWVsZHMsXHJcbiAgICAgICAgICAgIF91cGRhdGVGaWVsZEFycmF5LFxyXG4gICAgICAgICAgICBfZ2V0RmllbGRBcnJheVZhbHVlLFxyXG4gICAgICAgICAgICBfc3ViamVjdHMsXHJcbiAgICAgICAgICAgIF9zaG91bGRVbnJlZ2lzdGVyOiBmb3JtT3B0aW9ucy5zaG91bGRVbnJlZ2lzdGVyLFxyXG4gICAgICAgICAgICBfcHJveHlGb3JtU3RhdGUsXHJcbiAgICAgICAgICAgIGdldCBfZmllbGRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9maWVsZHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfZmllbGRzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfZmllbGRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBfZm9ybVZhbHVlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybVZhbHVlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IF9mb3JtVmFsdWVzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybVZhbHVlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2lzTW91bnRlZCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfaXNNb3VudGVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgX2lzTW91bnRlZCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2lzTW91bnRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2RlZmF1bHRWYWx1ZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RlZmF1bHRWYWx1ZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfZGVmYXVsdFZhbHVlcyh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2RlZmF1bHRWYWx1ZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9uYW1lcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfbmFtZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfbmFtZXModmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9uYW1lcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgX2lzSW5BY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lzSW5BY3Rpb247XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCBfaXNJbkFjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgX2lzSW5BY3Rpb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IF9mb3JtU3RhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2Zvcm1TdGF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IF9mb3JtU3RhdGUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIF9mb3JtU3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgX3VwZGF0ZVByb3BzOiAob3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmlnZ2VyLFxyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICB3YXRjaCxcclxuICAgICAgICBzZXRWYWx1ZSxcclxuICAgICAgICBnZXRWYWx1ZXMsXHJcbiAgICAgICAgcmVzZXQsXHJcbiAgICAgICAgY2xlYXJFcnJvcnMsXHJcbiAgICAgICAgdW5yZWdpc3RlcixcclxuICAgICAgICBzZXRFcnJvcixcclxuICAgICAgICBzZXRGb2N1cyxcclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gdXNlRm9ybShwcm9wcyA9IHt9KSB7XHJcbiAgICBjb25zdCBfZm9ybUNvbnRyb2wgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHVwZGF0ZUZvcm1TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWRGaWVsZHM6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoX2Zvcm1Db250cm9sLmN1cnJlbnQpIHtcclxuICAgICAgICBfZm9ybUNvbnRyb2wuY3VycmVudC5jb250cm9sLl91cGRhdGVQcm9wcyhwcm9wcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBfZm9ybUNvbnRyb2wuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY3JlYXRlRm9ybUNvbnRyb2wocHJvcHMpKSwgeyBmb3JtU3RhdGUgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250cm9sID0gX2Zvcm1Db250cm9sLmN1cnJlbnQuY29udHJvbDtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybVN0YXRlU3Vic2NyaXB0aW9uID0gY29udHJvbC5fc3ViamVjdHMuc3RhdGUuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dChmb3JtU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRSZW5kZXJGb3JtU3RhdGUoZm9ybVN0YXRlLCBjb250cm9sLl9wcm94eUZvcm1TdGF0ZSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sLl9mb3JtU3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbnRyb2wuX2Zvcm1TdGF0ZSksIGZvcm1TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGNvbnRyb2wuX2Zvcm1TdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1TdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbY29udHJvbF0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wuX2lzTW91bnRlZCkge1xyXG4gICAgICAgICAgICBjb250cm9sLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb250cm9sLl9wcm94eUZvcm1TdGF0ZS5pc1ZhbGlkICYmIGNvbnRyb2wuX3VwZGF0ZVZhbGlkKCk7XHJcbiAgICAgICAgICAgICFwcm9wcy5zaG91bGRVbnJlZ2lzdGVyICYmIGNvbnRyb2wuX3VwZGF0ZVZhbHVlcyhjb250cm9sLl9kZWZhdWx0VmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udHJvbC5fcmVtb3ZlRmllbGRzKCk7XHJcbiAgICB9KTtcclxuICAgIF9mb3JtQ29udHJvbC5jdXJyZW50LmZvcm1TdGF0ZSA9IGdldFByb3h5Rm9ybVN0YXRlKGZvcm1TdGF0ZSwgY29udHJvbC5fcHJveHlGb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIF9mb3JtQ29udHJvbC5jdXJyZW50O1xyXG59XG5cbmZ1bmN0aW9uIHVzZVdhdGNoKHByb3BzKSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGNvbnN0IHsgY29udHJvbCA9IG1ldGhvZHMuY29udHJvbCwgbmFtZSwgZGVmYXVsdFZhbHVlLCBkaXNhYmxlZCwgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgX25hbWUgPSBSZWFjdC51c2VSZWYobmFtZSk7XHJcbiAgICBfbmFtZS5jdXJyZW50ID0gbmFtZTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgdXBkYXRlVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgID8gY29udHJvbC5fZ2V0V2F0Y2gobmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoU3Vic2NyaXB0aW9uID0gY29udHJvbC5fc3ViamVjdHMud2F0Y2guc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKHsgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIV9uYW1lLmN1cnJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAhbmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRUb0FycmF5UGF5bG9hZChfbmFtZS5jdXJyZW50KS5zb21lKChmaWVsZE5hbWUpID0+IG5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZE5hbWUuc3RhcnRzV2l0aChuYW1lKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKGZpZWxkTmFtZSkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRyb2wuX2dldFdhdGNoKF9uYW1lLmN1cnJlbnQsIGRlZmF1bHRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoaXNPYmplY3QocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCkgOiBBcnJheS5pc0FycmF5KHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzYWJsZWQgJiYgd2F0Y2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2F0Y2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0sIFtkaXNhYmxlZCwgY29udHJvbCwgZGVmYXVsdFZhbHVlXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnRyb2wuX3JlbW92ZUZpZWxkcygpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cblxuZXhwb3J0IHsgQ29udHJvbGxlciwgRm9ybVByb3ZpZGVyLCBhcHBlbmRFcnJvcnMsIGdldCwgc2V0LCB1c2VDb250cm9sbGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtLCB1c2VGb3JtQ29udGV4dCwgdXNlRm9ybVN0YXRlLCB1c2VXYXRjaCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiQ3NzQmFzZWxpbmUiLCJUZXh0RmllbGQiLCJMaW5rIiwiR3JpZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJtYWtlU3R5bGVzIiwiQ29udGFpbmVyIiwiTG9nbyIsIlJlQ0FQVENIQSIsInVzZUZvcm0iLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsIm1hcmdpbiIsImxvZ28iLCJ0cmFuc2Zvcm0iLCJTaWduVXAiLCJjbGFzc2VzIiwidmVyaWZ5Q2FsbGJhY2siLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=