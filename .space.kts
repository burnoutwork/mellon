job("Test contract") {
    container(displayName = "Run contract tests", image = "melonweb3/melon:0.1") {
        shellScript {
            content = """
                set -e
                echo Run tests
                npm run test
            """
        }
    }
}