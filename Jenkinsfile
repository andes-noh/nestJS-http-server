pipeline {
    agent any

    environment {
        GIT_URL = "https://github.com/andes-noh/CI-CD-TEST.git"
        dockerHubRegistry = 'andesnoh/cicd_test'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-jenkins')
        // ==================== aws 관련 env ====================
        ECR_PATH='361848949410.dkr.ecr.ap-northeast-2.amazonaws.com'
        ECR_IMAGE='cicd_demo'
        AWS_CREDENTIALS = 'aws_credential'
        REGION ='ap-northeast-2'
        // ======================================================
        namespace='jenkins'
        selector_key='app.kubernetes.io/name'
        selector_val='test'
        manifest='test.k8s.yaml'
    }

    tools {
        nodejs "NODE_JS"
    }

    stages {
        stage('Pull') {
            steps {
                git url: "${GIT_URL}", branch: "main", poll: true, changelog: true
            }
        }

        // // docker hub login
        // stage('login'){
        //     steps {

        //       // sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        //     }
        // }

        stage('Build') {
            steps {
              script {
                // Docker Build
                docker.withRegistry("https://${ECR_PATH}", "ecr:${REGION}:${AWS_CREDENTIALS}") {
                  // image = docker.build("${ECR_PATH}/${ECR_IMAGE}", "--network=host --no-cache .")
                  image = docker.build("${ECR_PATH}/${ECR_IMAGE}")
                }
              }
              // sh "docker build -t ${dockerHubRegistry}:${env.BUILD_NUMBER} ."
            }
        }

        stage('Push') {
            steps {
              script {
                // push to ecr
                docker.withRegistry("https://${ECR_PATH}", "ecr:${REGION}:${AWS_CREDENTIALS}") {
                  image.push("${env.BUILD_NUMBER}")
                  image.push("latest")
                }
              }
              // script {
              //     sh "docker push ${dockerHubRegistry}:${env.BUILD_NUMBER}"
              //     sleep 10
              // }
            }
        }

        // stage('build and push') {
        //   steps {
        //     script {
        //       sh "docker buildx build --platform linux/amd64 -t ${dockerHubRegistry}:${env.BUILD_NUMBER} --push ."
        //       // sh "docker buildx --builder demo-builder-arm64 build --platform=linux/arm64 -t ${dockerHubRegistry}:${env.BUILD_NUMBER} --push ."
        //     }
        //   }
        // }

        stage('Clean') {
            steps {
                sh "echo 'The end'"
                // sh '''docker rmi $(docker images -f 'dangling=true' -q)'''
                sh "docker rmi ${ECR_PATH}/${ECR_IMAGE}:${env.BUILD_NUMBER}"
                sh "docker rmi ${ECR_PATH}/${ECR_IMAGE}:latest"
                // sh "docker rmi ${dockerHubRegistry}:${env.BUILD_NUMBER}"
                // sh "docker logout"
            }
        }

        stage( "Clean Up Existing Deployments" ) {
          steps {
            script {
    					sh "kubectl delete deployments -n ${namespace} --selector=${selector_key}=${selector_val}"
            }
          }
				}

			  stage( "Deploy to Cluster" ) {
          steps {
            script {
              sh "pwd"
              sh "ls -al"
              sh """#!/bin/bash
                cat ${manifest} | grep image
                sed -i 's|image: .*|image: "${ECR_PATH}/${ECR_IMAGE}:${env.BUILD_NUMBER}"|' ${manifest}
                cat ${manifest} | grep image
                """
              sh "kubectl apply -n ${namespace} -f ${manifest}"
				      sh "sleep 5"
            }
          }
				}

        stage( "Docker Image Clean" ) {
          steps {
            script {
              sh '''docker rmi $(docker images -f "dangling=true" -q)'''
            }
          }
        }

        // docker run
        // stage('Docker Run'){
        //     steps {
        //         sh "docker run -d -p 3000:3000 --rm --name MySampleApp ${dockerHubRegistry}:latest"
        //     }
        // }
    }
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
CI-CD-TEST/Jenkinsfile at main · andes-noh/CI-CD-TEST · GitHub
