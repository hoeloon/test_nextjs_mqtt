"use server";

import mqtt, { IClientOptions } from "mqtt";

let client: mqtt.MqttClient | null = null;

const mqttOption: IClientOptions = {
  clientId: "desktop",
  host: "me5f05c0.ala.dedicated.aws.emqxcloud.com",
  port: 8084,
  protocol: "wss",
  username: "test2",
  password: "test2",
};

export const connectClient = () => {
  return new Promise<void>(async (resolve, reject) => {
    if (client && client.connected) {
      return resolve();
    }
    client = mqtt.connect(
      "wss://me5f05c0.ala.dedicated.aws.emqxcloud.com:8084/mqtt",
      {
        ...mqttOption,
      }
    );

    client.on("connect", () => {
      console.log("MQTT Client Connected");
      resolve();
    });

    client.on("error", (error: Error) => {
      console.log("MQTT Client Error:", error);
      reject(error);
    });

    client.on("offline", () => {
      console.log("MQTT Client Offline");
    });

    client.on("close", () => {
      console.log("MQTT Client Disconnected");
      client = null;
    });
  });
};
