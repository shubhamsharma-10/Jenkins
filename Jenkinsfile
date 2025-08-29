pipeline {
    agent {label "agent-1"}

    stages {
        stage('Clone') {
            steps {
                git branch: "main", url: "https://github.com/shubhamsharma-10/Jenkins"
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t shubhamsharma10/todo-app:1 .'
            }
        }
        stage('Push') {
            steps {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credential',
                                         usernameVariable: 'DOCKER_USER',
                                         passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_USER/todo-app:1
                        docker logout
                    """
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker compose down || true"   // stop old containers
                sh "docker compose up -d"          // start new containers
                echo "Deployed successfully ✅"
            }
        }
    }
}
