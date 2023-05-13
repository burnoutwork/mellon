job("Test contract") {
    container(displayName = "Run contract tests", image = "rustlang/rust:nightly") {
        shellScript {
            content = """
                set -e
                # Build install dependents
                npm run init:contract
                # Run tests
                npm run test
            """
        }
    }
}