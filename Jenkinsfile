pipeline {
    agent {
        docker {
            image 'node:22'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {

        stage('Install Node.js dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test Echo') {
            steps {
                echo 'Hello, Jenkins pipeline is working with Docker and npm install!'
            }
        }
    }
}
