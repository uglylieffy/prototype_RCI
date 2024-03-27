import "../styles/globals.css"
import Provider from "../components/Provider";

export const metadata = {
    title: "viewer",
    description: "a json metadata and glb 3d file viewer"
}

const layout = ({children}) => {
  return (
    <html lang="en">
        <body>
          <Provider>
            <main>
                {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default layout