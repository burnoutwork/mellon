job("Test contract") {
     container(displayName = "Run publish script", image = "ubuntu") {
            shellScript {
                interpreter = "/bin/sh"
                content = """
                    echo Install dependencies...
                    apt -getupdate -y
                    apt-get install npm rustc cargo -y
                    npm setup

                    echo Run tests...
                    npm run test
                """
            }
        }
}