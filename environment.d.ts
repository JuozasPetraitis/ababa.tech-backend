declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      MONGO_DB_URI: string;
    }
  }
}

export {};
