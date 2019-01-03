pipeline {
  environment {
    registry = "docker_hub_account/repository_name"
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
        agent {
            dockerfile true
        }
        steps {
            echo 'Starting to build docker image'
            script {
                def customImage = docker.build("swe3tdream/react-typescript:latest")
                customImage.push()
            }
        }
    }
  }
}