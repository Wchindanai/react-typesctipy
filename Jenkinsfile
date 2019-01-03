pipeline {
  environment {
    registry = "docker_hub_account/repository_name"
    registryCredential = 'dockerhub'
  }
  agent {
    docker {
      image 'node'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn install && yarn build'
      }
    }
    stage('Build Docker') {
        stage {
          docker.build("swe3tdream/react-typescript")
        }
    }
  }
}