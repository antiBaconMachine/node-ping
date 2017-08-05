#!groovy

String GIT_VERSION
node {
    stage ('Checkout') {
        deleteDir()
        checkout scm
        GIT_VERSION = sh (
            script: 'git describe --tags',
            returnStdout: true
        ).trim()
    }
    stage ('Docker build') {
        docker.build("antibaconmachine/node-ping:${GIT_VERSION}", '.')
    }
    stage ('Test') {
        sh "docker run --rm ntibaconmachine/node-ping:${GIT_VERSION} yarn test"
    }
}
