import CodeMirror from '@uiw/react-codemirror'


export default function Editor({value, onChange, extension}) {


  return (
    
        <CodeMirror
            value={value}
            className='relative xl:w-[93vw] lg:w-[93vw] md:w-[90vw] min-w-[811px]'
            height='95vh'
            onChange={(val) => onChange(val)}
            extensions={[extension()]}
            theme="dark"
            basicSetup={{
                lineNumbers: true,
                lineWrapping: true,
            }}
        />
  )
}
 