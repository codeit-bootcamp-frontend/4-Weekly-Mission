import '@/components/folder/Content.css'

const FolderLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
    </>
  )
}

export default FolderLayout