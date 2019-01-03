pipeline {
  environment {
    registryCredential = 'dockerhub'
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
                docker.withRegistry("https://index.docker.io/v1/", 'dockerhub') {
                    def customImage = docker.build("swe3tdream/react-typescript")
                    customImage.push()
                }
            }
        }
    }
  }
}