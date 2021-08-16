(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-file-upload', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng2-file-upload'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var FileSelectDirective = /** @class */ (function () {
        function FileSelectDirective(element) {
            this.onFileSelected = new core.EventEmitter();
            this.element = element;
        }
        FileSelectDirective.prototype.getOptions = function () {
            return this.uploader.options;
        };
        FileSelectDirective.prototype.getFilters = function () {
            return {};
        };
        FileSelectDirective.prototype.isEmptyAfterSelection = function () {
            return !!this.element.nativeElement.attributes.multiple;
        };
        FileSelectDirective.prototype.onChange = function () {
            var files = this.element.nativeElement.files;
            var options = this.getOptions();
            var filters = this.getFilters();
            this.uploader.addToQueue(files, options, filters);
            this.onFileSelected.emit(files);
            if (this.isEmptyAfterSelection()) {
                this.element.nativeElement.value = '';
            }
        };
        return FileSelectDirective;
    }());
    FileSelectDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[ng2FileSelect]' },] }
    ];
    /** @nocollapse */
    FileSelectDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FileSelectDirective.propDecorators = {
        uploader: [{ type: core.Input }],
        onFileSelected: [{ type: core.Output }],
        onChange: [{ type: core.HostListener, args: ['change',] }]
    };

    var FileDropDirective = /** @class */ (function () {
        function FileDropDirective(element) {
            this.fileOver = new core.EventEmitter();
            this.onFileDrop = new core.EventEmitter();
            this.element = element;
        }
        FileDropDirective.prototype.getOptions = function () {
            return this.uploader.options;
        };
        FileDropDirective.prototype.getFilters = function () {
            return {};
        };
        FileDropDirective.prototype.onDrop = function (event) {
            var transfer = this._getTransfer(event);
            if (!transfer) {
                return;
            }
            var options = this.getOptions();
            var filters = this.getFilters();
            this._preventAndStop(event);
            this.uploader.addToQueue(transfer.files, options, filters);
            this.fileOver.emit(false);
            this.onFileDrop.emit(transfer.files);
        };
        FileDropDirective.prototype.onDragOver = function (event) {
            var transfer = this._getTransfer(event);
            if (!this._haveFiles(transfer.types)) {
                return;
            }
            transfer.dropEffect = 'copy';
            this._preventAndStop(event);
            this.fileOver.emit(true);
        };
        FileDropDirective.prototype.onDragLeave = function (event) {
            if (this.element) {
                if (event.currentTarget === this.element[0]) {
                    return;
                }
            }
            this._preventAndStop(event);
            this.fileOver.emit(false);
        };
        FileDropDirective.prototype._getTransfer = function (event) {
            return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
        };
        FileDropDirective.prototype._preventAndStop = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        FileDropDirective.prototype._haveFiles = function (types) {
            if (!types) {
                return false;
            }
            if (types.indexOf) {
                return types.indexOf('Files') !== -1;
            }
            else if (types.contains) {
                return types.contains('Files');
            }
            else {
                return false;
            }
        };
        return FileDropDirective;
    }());
    FileDropDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[ng2FileDrop]' },] }
    ];
    /** @nocollapse */
    FileDropDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    FileDropDirective.propDecorators = {
        uploader: [{ type: core.Input }],
        fileOver: [{ type: core.Output }],
        onFileDrop: [{ type: core.Output }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function isElement(node) {
        return !!(node && (node.nodeName || node.prop && node.attr && node.find));
    }
    var FileLikeObject = /** @class */ (function () {
        function FileLikeObject(fileOrInput) {
            this.rawFile = fileOrInput;
            var isInput = isElement(fileOrInput);
            var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
            var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
            var method = '_createFrom' + postfix;
            this[method](fakePathOrObject);
        }
        FileLikeObject.prototype._createFromFakePath = function (path) {
            this.lastModifiedDate = void 0;
            this.size = void 0;
            this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
            this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
        };
        FileLikeObject.prototype._createFromObject = function (object) {
            this.size = object.size;
            this.type = object.type;
            this.name = object.name;
        };
        return FileLikeObject;
    }());

    var FileItem = /** @class */ (function () {
        function FileItem(uploader, some, options) {
            this.url = '/';
            this.headers = [];
            this.withCredentials = true;
            this.formData = [];
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = false;
            this.progress = 0;
            this.index = void 0;
            this.uploader = uploader;
            this.some = some;
            this.options = options;
            this.file = new FileLikeObject(some);
            this._file = some;
            if (uploader.options) {
                this.method = uploader.options.method || 'POST';
                this.alias = uploader.options.itemAlias || 'file';
            }
            this.url = uploader.options.url;
        }
        FileItem.prototype.upload = function () {
            try {
                this.uploader.uploadItem(this);
            }
            catch (e) {
                this.uploader._onCompleteItem(this, '', 0, {});
                this.uploader._onErrorItem(this, '', 0, {});
            }
        };
        FileItem.prototype.cancel = function () {
            this.uploader.cancelItem(this);
        };
        FileItem.prototype.remove = function () {
            this.uploader.removeFromQueue(this);
        };
        FileItem.prototype.onBeforeUpload = function () {
            return void 0;
        };
        FileItem.prototype.onBuildForm = function (form) {
            return { form: form };
        };
        FileItem.prototype.onProgress = function (progress) {
            return { progress: progress };
        };
        FileItem.prototype.onSuccess = function (response, status, headers) {
            return { response: response, status: status, headers: headers };
        };
        FileItem.prototype.onError = function (response, status, headers) {
            return { response: response, status: status, headers: headers };
        };
        FileItem.prototype.onCancel = function (response, status, headers) {
            return { response: response, status: status, headers: headers };
        };
        FileItem.prototype.onComplete = function (response, status, headers) {
            return { response: response, status: status, headers: headers };
        };
        FileItem.prototype._onBeforeUpload = function () {
            this.isReady = true;
            this.isUploading = true;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = false;
            this.progress = 0;
            this.onBeforeUpload();
        };
        FileItem.prototype._onBuildForm = function (form) {
            this.onBuildForm(form);
        };
        FileItem.prototype._onProgress = function (progress) {
            this.progress = progress;
            this.onProgress(progress);
        };
        FileItem.prototype._onSuccess = function (response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = true;
            this.isCancel = false;
            this.isError = false;
            this.progress = 100;
            this.index = void 0;
            this.onSuccess(response, status, headers);
        };
        FileItem.prototype._onError = function (response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = true;
            this.isSuccess = false;
            this.isCancel = false;
            this.isError = true;
            this.progress = 0;
            this.index = void 0;
            this.onError(response, status, headers);
        };
        FileItem.prototype._onCancel = function (response, status, headers) {
            this.isReady = false;
            this.isUploading = false;
            this.isUploaded = false;
            this.isSuccess = false;
            this.isCancel = true;
            this.isError = false;
            this.progress = 0;
            this.index = void 0;
            this.onCancel(response, status, headers);
        };
        FileItem.prototype._onComplete = function (response, status, headers) {
            this.onComplete(response, status, headers);
            if (this.uploader.options.removeAfterUpload) {
                this.remove();
            }
        };
        FileItem.prototype._prepareToUploading = function () {
            this.index = this.index || ++this.uploader._nextIndex;
            this.isReady = true;
        };
        return FileItem;
    }());

    var FileType = /** @class */ (function () {
        function FileType() {
        }
        FileType.getMimeClass = function (file) {
            var mimeClass = 'application';
            if (this.mime_psd.indexOf(file.type) !== -1) {
                mimeClass = 'image';
            }
            else if (file.type.match('image.*')) {
                mimeClass = 'image';
            }
            else if (file.type.match('video.*')) {
                mimeClass = 'video';
            }
            else if (file.type.match('audio.*')) {
                mimeClass = 'audio';
            }
            else if (file.type === 'application/pdf') {
                mimeClass = 'pdf';
            }
            else if (this.mime_compress.indexOf(file.type) !== -1) {
                mimeClass = 'compress';
            }
            else if (this.mime_doc.indexOf(file.type) !== -1) {
                mimeClass = 'doc';
            }
            else if (this.mime_xsl.indexOf(file.type) !== -1) {
                mimeClass = 'xls';
            }
            else if (this.mime_ppt.indexOf(file.type) !== -1) {
                mimeClass = 'ppt';
            }
            if (mimeClass === 'application') {
                mimeClass = this.fileTypeDetection(file.name);
            }
            return mimeClass;
        };
        FileType.fileTypeDetection = function (inputFilename) {
            var types = {
                'jpg': 'image',
                'jpeg': 'image',
                'tif': 'image',
                'psd': 'image',
                'bmp': 'image',
                'png': 'image',
                'nef': 'image',
                'tiff': 'image',
                'cr2': 'image',
                'dwg': 'image',
                'cdr': 'image',
                'ai': 'image',
                'indd': 'image',
                'pin': 'image',
                'cdp': 'image',
                'skp': 'image',
                'stp': 'image',
                '3dm': 'image',
                'mp3': 'audio',
                'wav': 'audio',
                'wma': 'audio',
                'mod': 'audio',
                'm4a': 'audio',
                'compress': 'compress',
                'zip': 'compress',
                'rar': 'compress',
                '7z': 'compress',
                'lz': 'compress',
                'z01': 'compress',
                'bz2': 'compress',
                'gz': 'compress',
                'pdf': 'pdf',
                'xls': 'xls',
                'xlsx': 'xls',
                'ods': 'xls',
                'mp4': 'video',
                'avi': 'video',
                'wmv': 'video',
                'mpg': 'video',
                'mts': 'video',
                'flv': 'video',
                '3gp': 'video',
                'vob': 'video',
                'm4v': 'video',
                'mpeg': 'video',
                'm2ts': 'video',
                'mov': 'video',
                'doc': 'doc',
                'docx': 'doc',
                'eps': 'doc',
                'txt': 'doc',
                'odt': 'doc',
                'rtf': 'doc',
                'ppt': 'ppt',
                'pptx': 'ppt',
                'pps': 'ppt',
                'ppsx': 'ppt',
                'odp': 'ppt'
            };
            var chunks = inputFilename.split('.');
            if (chunks.length < 2) {
                return 'application';
            }
            var extension = chunks[chunks.length - 1].toLowerCase();
            if (types[extension] === undefined) {
                return 'application';
            }
            else {
                return types[extension];
            }
        };
        return FileType;
    }());
    /*  MS office  */
    FileType.mime_doc = [
        'application/msword',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'application/vnd.ms-word.document.macroEnabled.12',
        'application/vnd.ms-word.template.macroEnabled.12'
    ];
    FileType.mime_xsl = [
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'application/vnd.ms-excel.sheet.macroEnabled.12',
        'application/vnd.ms-excel.template.macroEnabled.12',
        'application/vnd.ms-excel.addin.macroEnabled.12',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ];
    FileType.mime_ppt = [
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.presentationml.template',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ];
    /* PSD */
    FileType.mime_psd = [
        'image/photoshop',
        'image/x-photoshop',
        'image/psd',
        'application/photoshop',
        'application/psd',
        'zz-application/zz-winassoc-psd'
    ];
    /* Compressed files */
    FileType.mime_compress = [
        'application/x-gtar',
        'application/x-gcompress',
        'application/compress',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/octet-stream',
        'application/x-zip-compressed',
        'application/zip-compressed',
        'application/x-7z-compressed',
        'application/gzip',
        'application/x-bzip2'
    ];

    function isFile(value) {
        return (File && value instanceof File);
    }
    var FileUploader = /** @class */ (function () {
        function FileUploader(options) {
            this.isUploading = false;
            this.queue = [];
            this.progress = 0;
            this._nextIndex = 0;
            this.options = {
                autoUpload: false,
                isHTML5: true,
                filters: [],
                removeAfterUpload: false,
                disableMultipart: false,
                formatDataFunction: function (item) { return item._file; },
                formatDataFunctionIsAsync: false
            };
            this.setOptions(options);
            this.response = new core.EventEmitter();
        }
        FileUploader.prototype.setOptions = function (options) {
            this.options = Object.assign(this.options, options);
            this.authToken = this.options.authToken;
            this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
            this.autoUpload = this.options.autoUpload;
            this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
            if (this.options.maxFileSize) {
                this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
            }
            if (this.options.allowedFileType) {
                this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
            }
            if (this.options.allowedMimeType) {
                this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
            }
            for (var i = 0; i < this.queue.length; i++) {
                this.queue[i].url = this.options.url;
            }
        };
        FileUploader.prototype.addToQueue = function (files, options, filters) {
            var e_1, _a;
            var _this = this;
            var list = [];
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    list.push(file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var arrayOfFilters = this._getFilters(filters);
            var count = this.queue.length;
            var addedFileItems = [];
            list.map(function (some) {
                if (!options) {
                    options = _this.options;
                }
                var temp = new FileLikeObject(some);
                if (_this._isValidFile(temp, arrayOfFilters, options)) {
                    var fileItem = new FileItem(_this, some, options);
                    addedFileItems.push(fileItem);
                    _this.queue.push(fileItem);
                    _this._onAfterAddingFile(fileItem);
                }
                else {
                    var filter = arrayOfFilters[_this._failFilterIndex];
                    _this._onWhenAddingFileFailed(temp, filter, options);
                }
            });
            if (this.queue.length !== count) {
                this._onAfterAddingAll(addedFileItems);
                this.progress = this._getTotalProgress();
            }
            this._render();
            if (this.options.autoUpload) {
                this.uploadAll();
            }
        };
        FileUploader.prototype.removeFromQueue = function (value) {
            var index = this.getIndexOfItem(value);
            var item = this.queue[index];
            if (item.isUploading) {
                item.cancel();
            }
            this.queue.splice(index, 1);
            this.progress = this._getTotalProgress();
        };
        FileUploader.prototype.clearQueue = function () {
            while (this.queue.length) {
                this.queue[0].remove();
            }
            this.progress = 0;
        };
        FileUploader.prototype.uploadItem = function (value) {
            var index = this.getIndexOfItem(value);
            var item = this.queue[index];
            var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
            item._prepareToUploading();
            if (this.isUploading) {
                return;
            }
            this.isUploading = true;
            this[transport](item);
        };
        FileUploader.prototype.cancelItem = function (value) {
            var index = this.getIndexOfItem(value);
            var item = this.queue[index];
            var prop = this.options.isHTML5 ? item._xhr : item._form;
            if (item && item.isUploading) {
                prop.abort();
            }
        };
        FileUploader.prototype.uploadAll = function () {
            var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
            if (!items.length) {
                return;
            }
            items.map(function (item) { return item._prepareToUploading(); });
            items[0].upload();
        };
        FileUploader.prototype.cancelAll = function () {
            var items = this.getNotUploadedItems();
            items.map(function (item) { return item.cancel(); });
        };
        FileUploader.prototype.isFile = function (value) {
            return isFile(value);
        };
        FileUploader.prototype.isFileLikeObject = function (value) {
            return value instanceof FileLikeObject;
        };
        FileUploader.prototype.getIndexOfItem = function (value) {
            return typeof value === 'number' ? value : this.queue.indexOf(value);
        };
        FileUploader.prototype.getNotUploadedItems = function () {
            return this.queue.filter(function (item) { return !item.isUploaded; });
        };
        FileUploader.prototype.getReadyItems = function () {
            return this.queue
                .filter(function (item) { return (item.isReady && !item.isUploading); })
                .sort(function (item1, item2) { return item1.index - item2.index; });
        };
        FileUploader.prototype.destroy = function () {
            return void 0;
        };
        FileUploader.prototype.onAfterAddingAll = function (fileItems) {
            return { fileItems: fileItems };
        };
        FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
            return { fileItem: fileItem, form: form };
        };
        FileUploader.prototype.onAfterAddingFile = function (fileItem) {
            return { fileItem: fileItem };
        };
        FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
            return { item: item, filter: filter, options: options };
        };
        FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
            return { fileItem: fileItem };
        };
        FileUploader.prototype.onProgressItem = function (fileItem, progress) {
            return { fileItem: fileItem, progress: progress };
        };
        FileUploader.prototype.onProgressAll = function (progress) {
            return { progress: progress };
        };
        FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
            return { item: item, response: response, status: status, headers: headers };
        };
        FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
            return { item: item, response: response, status: status, headers: headers };
        };
        FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
            return { item: item, response: response, status: status, headers: headers };
        };
        FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
            return { item: item, response: response, status: status, headers: headers };
        };
        FileUploader.prototype.onCompleteAll = function () {
            return void 0;
        };
        FileUploader.prototype._mimeTypeFilter = function (item) {
            return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
        };
        FileUploader.prototype._fileSizeFilter = function (item) {
            return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
        };
        FileUploader.prototype._fileTypeFilter = function (item) {
            return !(this.options.allowedFileType &&
                this.options.allowedFileType.indexOf(FileType.getMimeClass(item)) === -1);
        };
        FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
            item._onError(response, status, headers);
            this.onErrorItem(item, response, status, headers);
        };
        FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
            item._onComplete(response, status, headers);
            this.onCompleteItem(item, response, status, headers);
            var nextItem = this.getReadyItems()[0];
            this.isUploading = false;
            if (nextItem) {
                nextItem.upload();
                return;
            }
            this.onCompleteAll();
            this.progress = this._getTotalProgress();
            this._render();
        };
        FileUploader.prototype._headersGetter = function (parsedHeaders) {
            return function (name) {
                if (name) {
                    return parsedHeaders[name.toLowerCase()] || void 0;
                }
                return parsedHeaders;
            };
        };
        FileUploader.prototype._xhrTransport = function (item) {
            var e_2, _a, e_3, _b;
            var _this = this;
            var that = this;
            var xhr = item._xhr = new XMLHttpRequest();
            var sendable;
            this._onBeforeUploadItem(item);
            if (typeof item._file.size !== 'number') {
                throw new TypeError('The file specified is no longer valid');
            }
            if (!this.options.disableMultipart) {
                sendable = new FormData();
                this._onBuildItemForm(item, sendable);
                var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
                if (!this.options.parametersBeforeFiles) {
                    appendFile();
                }
                // For AWS, Additional Parameters must come BEFORE Files
                if (this.options.additionalParameter !== undefined) {
                    Object.keys(this.options.additionalParameter).forEach(function (key) {
                        var paramVal = _this.options.additionalParameter[key];
                        // Allow an additional parameter to include the filename
                        if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                            paramVal = paramVal.replace('{{file_name}}', item.file.name);
                        }
                        sendable.append(key, paramVal);
                    });
                }
                if (this.options.parametersBeforeFiles) {
                    appendFile();
                }
            }
            else {
                sendable = this.options.formatDataFunction(item);
            }
            xhr.upload.onprogress = function (event) {
                var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
                _this._onProgressItem(item, progress);
            };
            xhr.onload = function () {
                var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
                var response = _this._transformResponse(xhr.response, headers);
                var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
                var method = '_on' + gist + 'Item';
                _this[method](item, response, xhr.status, headers);
                _this._onCompleteItem(item, response, xhr.status, headers);
            };
            xhr.onerror = function () {
                var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
                var response = _this._transformResponse(xhr.response, headers);
                _this._onErrorItem(item, response, xhr.status, headers);
                _this._onCompleteItem(item, response, xhr.status, headers);
            };
            xhr.onabort = function () {
                var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
                var response = _this._transformResponse(xhr.response, headers);
                _this._onCancelItem(item, response, xhr.status, headers);
                _this._onCompleteItem(item, response, xhr.status, headers);
            };
            xhr.open(item.method, item.url, true);
            xhr.withCredentials = item.withCredentials;
            if (this.options.headers) {
                try {
                    for (var _c = __values(this.options.headers), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var header = _d.value;
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (item.headers.length) {
                try {
                    for (var _e = __values(item.headers), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var header = _f.value;
                        xhr.setRequestHeader(header.name, header.value);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            if (this.authToken) {
                xhr.setRequestHeader(this.authTokenHeader, this.authToken);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    that.response.emit(xhr.responseText);
                }
            };
            if (this.options.formatDataFunctionIsAsync) {
                sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
            }
            else {
                xhr.send(sendable);
            }
            this._render();
        };
        FileUploader.prototype._getTotalProgress = function (value) {
            if (value === void 0) { value = 0; }
            if (this.options.removeAfterUpload) {
                return value;
            }
            var notUploaded = this.getNotUploadedItems().length;
            var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
            var ratio = 100 / this.queue.length;
            var current = value * ratio / 100;
            return Math.round(uploaded * ratio + current);
        };
        FileUploader.prototype._getFilters = function (filters) {
            if (!filters) {
                return this.options.filters;
            }
            if (Array.isArray(filters)) {
                return filters;
            }
            if (typeof filters === 'string') {
                var names_1 = filters.match(/[^\s,]+/g);
                return this.options.filters
                    .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
            }
            return this.options.filters;
        };
        FileUploader.prototype._render = function () {
            return void 0;
        };
        FileUploader.prototype._queueLimitFilter = function () {
            return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
        };
        FileUploader.prototype._isValidFile = function (file, filters, options) {
            var _this = this;
            this._failFilterIndex = -1;
            return !filters.length ? true : filters.every(function (filter) {
                _this._failFilterIndex++;
                return filter.fn.call(_this, file, options);
            });
        };
        FileUploader.prototype._isSuccessCode = function (status) {
            return (status >= 200 && status < 300) || status === 304;
        };
        FileUploader.prototype._transformResponse = function (response, headers) {
            return response;
        };
        FileUploader.prototype._parseHeaders = function (headers) {
            var parsed = {};
            var key;
            var val;
            var i;
            if (!headers) {
                return parsed;
            }
            headers.split('\n').map(function (line) {
                i = line.indexOf(':');
                key = line.slice(0, i).trim().toLowerCase();
                val = line.slice(i + 1).trim();
                if (key) {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                }
            });
            return parsed;
        };
        FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
            this.onWhenAddingFileFailed(item, filter, options);
        };
        FileUploader.prototype._onAfterAddingFile = function (item) {
            this.onAfterAddingFile(item);
        };
        FileUploader.prototype._onAfterAddingAll = function (items) {
            this.onAfterAddingAll(items);
        };
        FileUploader.prototype._onBeforeUploadItem = function (item) {
            item._onBeforeUpload();
            this.onBeforeUploadItem(item);
        };
        FileUploader.prototype._onBuildItemForm = function (item, form) {
            item._onBuildForm(form);
            this.onBuildItemForm(item, form);
        };
        FileUploader.prototype._onProgressItem = function (item, progress) {
            var total = this._getTotalProgress(progress);
            this.progress = total;
            item._onProgress(progress);
            this.onProgressItem(item, progress);
            this.onProgressAll(total);
            this._render();
        };
        FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
            item._onSuccess(response, status, headers);
            this.onSuccessItem(item, response, status, headers);
        };
        FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
            item._onCancel(response, status, headers);
            this.onCancelItem(item, response, status, headers);
        };
        return FileUploader;
    }());

    var FileUploadModule = /** @class */ (function () {
        function FileUploadModule() {
        }
        return FileUploadModule;
    }());
    FileUploadModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [FileDropDirective, FileSelectDirective],
                    exports: [FileDropDirective, FileSelectDirective]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FileDropDirective = FileDropDirective;
    exports.FileItem = FileItem;
    exports.FileLikeObject = FileLikeObject;
    exports.FileSelectDirective = FileSelectDirective;
    exports.FileUploadModule = FileUploadModule;
    exports.FileUploader = FileUploader;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-file-upload.umd.js.map