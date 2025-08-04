import CodeMirror from '@uiw/react-codemirror'


export default function Editor({className, value, onChange, extension, display}) {


  return (
    <div className= {`w-sm min-w-xs lg:w-lg xl:w-xl xxl:w-xxl ${className}`}>
        <div className='text-center font-bold font-mono'>
             {display}
        </div>
        <CodeMirror
            value={value}
            height="92vh"
            onChange={(val) => onChange(val)}
            extensions={[extension()]}
            theme="dark"
            basicSetup={{
                lineNumbers: true,
                lineWrapping: true,
            }}
        />
    </div>
  )
}
 