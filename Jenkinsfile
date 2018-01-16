#!groovy
@Library("Reform") _

properties([
        [$class: 'GithubProjectProperty', displayName: 'BAR Web acceptance tests', projectUrlStr: 'https://github.com/hmcts/bar-web-acceptance-tests'],
        parameters([
                string(defaultValue: 'latest', description: 'bar-web Docker Version', name: 'barWebDockerVersion')
        ])
])


lock('BAR Web Acceptance Tests') {
    node {
        try {
            stage('Checkout') {
                deleteDir()
                checkout scm
            }

            stage('Setup') {
                sh 'yarn install'
            }

            try {
                stage('Start Docker Images') {
                    env.BAR_WEB_DOCKER_VERSION = params.barWebDockerVersion

                    sh 'docker-compose build'
                    sh 'docker-compose pull'
                    sh 'docker-compose up -d bar-web remote-webdriver'
                }

                stage('Run acceptance tests') {
                    sh 'mkdir -p output'
                    sh 'docker-compose up integration-tests'

                    def exitCode = sh returnStdout: true, script: "docker-compose ps -q integration-tests | xargs docker inspect -f '{{ .State.ExitCode }}'"
                    if (exitCode.toInteger() > 0) {
                        steps.archiveArtifacts 'output/*.png'
                        steps.error("Integration tests failed")
                    }
                }
            } finally {
                stage('Stop Docker Images') {
                    sh 'docker-compose down'
                }
            }
        } catch (err) {
            notifyBuildFailure channel: '#cc-payments-tech'
            throw err
        }
    }
}
