import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    normal: {
      executor: 'constant-vus',
      vus: 200,
      duration: '10s',
      exec: "normal",
      gracefulStop: '0s',
    },
    notFound: {
      executor: 'constant-vus',
      vus: 200,
      duration: '10s',
      exec: "notFound",
      gracefulStop: '0s',
      startTime: '10s'
    },
    error: {
      executor: 'constant-vus',
      vus: 200,
      duration: '10s',
      exec: "error",
      gracefulStop: '0s',
      startTime: '20s'
    },
    slow: {
      executor: 'constant-vus',
      vus: 200,
      duration: '10s',
      exec: "slow",
      gracefulStop: '10s',
      startTime: '30s'
    },
    verySlow: {
      executor: 'constant-vus',
      vus: 200,
      duration: '10s',
      exec: "verySlow",
      gracefulStop: '30s',
      startTime: '50s'
    }
  }
};

 const host = "http://host.docker.internal:5000";

export function normal() {
  http.get(host + "/api/goty/similars/1");
  sleep(0.5);
}

export function slow() {
  http.get(host + "/api/goty/similars/2");
  sleep(0.5);
}

export function verySlow() {
  http.get(host + "/api/goty/similars/3");
  sleep(0.5);
}

export function notFound() {
  http.get(host + "/api/goty/similars/4");
  sleep(0.5);
}

export function error() {
  http.get(host + "/api/goty/similars/5");
  sleep(0.5);
}