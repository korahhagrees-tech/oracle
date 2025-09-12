"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importStar(require("./config/config"));
const initMockData_1 = require("./initMockData");
const startServer = async () => {
    try {
        // Initialize mock data (always available)
        (0, initMockData_1.initializeMockData)();
        const port = await (0, config_1.findAvailablePort)(config_1.default.port);
        app_1.default.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
            console.log(`📡 API endpoints available at:`);
            console.log(`   - http://localhost:${port}/ (API info & available endpoints)`);
            console.log(`   - http://localhost:${port}/health (Health check)`);
            console.log(`   - http://localhost:${port}/api/results (Game results)`);
            console.log(`\n💡 Note: Server runs with mock data - no database required!`);
            console.log(`🎮 Game Results API ready for testing`);
            console.log(`\n📚 Visit http://localhost:${port}/ to see all available endpoints`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
