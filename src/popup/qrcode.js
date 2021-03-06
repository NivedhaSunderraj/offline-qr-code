/**
 * Starter module for QR code popup.
 *
 * @module qrcode
 * @requires modules/RandomTips
 * @requires modules/InitQrCode
 */
"use strict";

import {tips} from "/common/modules/data/tips.js";
import * as RandomTips from "/common/modules/RandomTips.js";

import "./modules/InitQrCode.js";

RandomTips.init(tips).then(() => {
    RandomTips.setContext("popup");
    RandomTips.showRandomTipIfWanted();
});
