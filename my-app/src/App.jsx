import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('John Doe')
  const [bio, setBio] = useState('Frontend Developer')
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-100 p-6 rounded-xl w-96 h-auto shadow-lg">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="rounded-full w-24 h-24 mb-4 hover:opacity-80 flex justify-center overflow-hidden bg-blue-100">
            <img 
              src="https://i.pravatar.cc/150" 
              alt="Profile" 
              className="object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="w-full space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none sm:w-80 md:w-96"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none sm:w-80 md:w-96"
                    rows={3}
                  />
                </div>
                
                <button 
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                >
                  Save Profile
                </button>
              </>
            ) : (
              <>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                  <p className="text-gray-600 mt-1">{bio}</p>
                </div>
                
                <button 
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full mt-4"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
