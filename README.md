# nnApp

**nnApp** is a Go package that provides a basic structure for building applications using the Blockless Network (B7S) framework. It includes functionalities for initializing, configuring, and running a Blockless Node.

## Installation

To use this package in your project, you can import it with the following:

```go
import "github.com/blocklessnetwork/nnApp"
```

## Usage

### Creating an App Instance

To create a new instance of the App structure, use the NewApp function, providing a name for the app:

```go
app, err := nnApp.NewApp("your-app-name")
if err != nil {
    // handle error
}
```

### Configuring the App

The configuration is loaded from command-line flags. Customize the flags according to your requirements. Additionally, you can configure the logging level with the zerolog package.

```go
// Parse configuration flags
app.B7sConfig = nnApp.parseFlags()

// Configure zerolog with desired level (optional)
app.logger = zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.DebugLevel)

```