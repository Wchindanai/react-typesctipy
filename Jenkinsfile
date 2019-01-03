pipeline {
  environment {
    registryCredential = 'b36c7346-1886-417f-b94f-8bb657f714d1'
  }
  agent any
  stages {
    stage('Build') {
        agent {
            docker {
            image 'node'
            args '-p 3000:3000'
            }
        }
      steps {
        sh 'yarn install && yarn build'
      }
    }
    stage('Build Docker') {
        steps {
            echo 'Starting to build docker image'
            script {
                def customImage = docker.build("swe3tdream/react-typescript:latest", registryCredential)
                customImage.push()
            }
        }
    }
  }
}