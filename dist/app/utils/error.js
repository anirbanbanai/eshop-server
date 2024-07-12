"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErrorWithMessage = isErrorWithMessage;
function isErrorWithMessage(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string');
}
