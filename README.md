# ARVenture

Table of contents:

- [ARVenture](#arventure)
- [ARVenture Project Overview](#arventure-project-overview)
- [Summary](#summary)
  - [Credits](#credits)
- [Table of contents:](#table-of-contents)
- [Live Examples](#live-examples)
- [How to Run Code Locally](#how-to-run-code-locally)
    - [1. First, clone the repository or download the zip code into your local desktop.](#1-first-clone-the-repository-or-download-the-zip-code-into-your-local-desktop)
  - [2a. Docker (RECOMMENDED)](#2a-docker-recommended)
  - [2b. Manual](#2b-manual)
  - [1. Requirements Specification](#1-requirements-specification)
  - [2. Design](#2-design)
  - [3. Implementation](#3-implementation)
    - [ARV Frontend Web Technologies:](#arv-frontend-web-technologies)
    - [ARV API Backend Technologies:](#arv-api-backend-technologies)
    - [Analysis Dashboard Technologies:](#analysis-dashboard-technologies)
  - [4. Verification and Validation](#4-verification-and-validation)
  - [5. Deployment and Evolution and Maintenance](#5-deployment-and-evolution-and-maintenance)

# ARVenture Project Overview

ARVenture is an idea of an AR Glasses that offers a system of making real world objects after wearing the glasses to virtual objects and tools. It consists of several components and systems. You can go to the docs page from here.

# Summary

Please refer to the document that includes all the files and documents of the ARVenture Project. [ARVenture Documents Home](https://anmarhani.github.io/ARVenture/)

Also, Github Repository [ARVenture Github Repo](https://github.com/AnmarHani/ARVenture)

## Credits

- Anmar Hani | Team Lead, Software Architect, Test Designer, System Embedded Engineer, and Project Manager.
- Mohamad Alsaadwi | Web Frontend Developer.
- Raef Shah | Fullstack Designer.
- Yaser Kaid | Mobile Developer.
- Ziyad Alghamdi | Backend Developer and Data Analyst.
- Fawaz Khosifan | System Administrator and Penetration Tester and Security Specialist

[Ziyad Cert.pdf](https://github.com/AnmarHani/ARVenture/files/13539776/Ziyad.Cert.pdf)

# Live Examples

- Frontend: [ARVenture Web](https://arventure.vercel.app/)
- Backend: [ARVenture Backend](https://arventure-dev-hpnx.1.us-1.fl0.io/docs)
- Analysis Dashboard: [ARVenture Data Analysis Dashboard](https://arventure-imkyv9qx3qdtm5fj9tcbfe.streamlit.app/)
- Docs: [ARVenture Docs](https://anmarhani.github.io/ARVenture/)

# How to Run Code Locally

### 1. First, clone the repository or download the zip code into your local desktop.

## 2a. Docker (RECOMMENDED)

> NOTE: it may take up to 2+ minutes to setup. Please be patient, because this doesnt force you to download any dependencies except Docker.

1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Then, go to root directory, in terminal run `docker-compose -f docker-compose.yml up --build`

## 2b. Manual

1. Manual: Download [NodeJS](https://nodejs.org/en/download) and [Python 3.10+](https://www.python.org/downloads/) with Python.EXE in PATH checked in installer.
2. Then, go to root directory, open two terminals, one run `cd frontend` and the other run `cd backend`
3. In the frontend terminal run `npm install` to install all needed packages, In the backend terminal run `pip install -r requirements.txt`
4. In the frontend terminal run `npm run dev` and open the browser in http://localhost:5174
5. In the backend terminal run `python ARAPI.py`

## 1. Requirements Specification

In this stage we collected requirements, analysed, priotriezed it, and specified it.
[Go to Requirements Specification Document](https://anmarhani.github.io/ARVenture/execution/specification/)

## 2. Design

In this stage, System and Software Architecture is designed. Also, user interfaces are designed.
[Go to Design Document](https://anmarhani.github.io/ARVenture/execution/design/)

## 3. Implementation

in this stage, We have several implementation stages:

- ARV API Backend (DONE)
- ARV Frontend Web (DONE)
- Analysis Dashboard (DONE)
- Mobile Application (DONE)
- VR Glasses and System (LATER)

[Go to Implementation Document](https://anmarhani.github.io/ARVenture/execution/implementation/)

### ARV Frontend Web Technologies:

- HTML/CSS
- SvelteJS
- Bootstrap

### ARV API Backend Technologies:

- FastAPI
- MySQL Database

### Analysis Dashboard Technologies:

- Pandas
- Numpy
- Matplotlib
- SQL
- Streamlit

## 4. Verification and Validation

In this stage we organized and structured testing stages and testing methods.
[Go to Verification and Validation Document](./documents/project-management/execution/implementation.md)

## 5. Deployment and Evolution and Maintenance

In this stage we deployed the system and planned for scalability and evolution.
[Go to Evolution Document](./documents/project-management/execution/implementation.md)
