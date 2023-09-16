import useConnection from './hook/useConnection'
import useStateDebounce from './hook/useStateDebounce'

function App() {
  const statusConnection = useConnection()
  const [debounceValue, tempValue, setTempValue] = useStateDebounce('', 500)

  return (
    <div className='flex'>
      <div className='flex-grow-0 p-2'>
        status: <span data-testid='statusId' className={`block font-bold ${statusConnection ? 'text-green-500' : 'text-red-500'}`}>
          {statusConnection ? 'online' : 'offline'}
        </span>
      </div>

      <div className='flex-grow-0 p-2'>
        <input
          type='text'
          className='w-[200px] border-[1px]'
          value={tempValue}
          onChange={event => setTempValue(event.target.value)}
          data-testid='inputId'
        />
        <span className='block' data-testid='resultId'>result: {debounceValue}</span>
      </div>
    </div>
  )
}

export default App
