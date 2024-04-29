import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    const year = new Date().getFullYear()
    const userTypes = [
        {
            type: 'RH',
            image: 'RH.jpg',
            link:'/RhLogin'
        },
        {
            type: 'Superviseur(e)',
            image: 'Superviseur.jpg',
            link: '/SupLogin'
        },
        {
            type: 'Employé(e)',
            image: 'employee.jpeg',
            link: '/EmployeeLogin'
        }
    ]
    return (
        <>
            <header className=' h-20 dark:bg-gray-900'>
                <img src="removedBGComdata.png" className=' h-full w-72 md:ml-96' alt="" />
            </header>

            <section className="bg-gray-50 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
                <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                    <div className="lg:w-2/3">
                        <div className="h-64 bg-cover lg:h-full" style={{ backgroundImage: "url('BGomdata.jpg')" }}></div>
                    </div>

                    <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Bienvenue sur la plateforme <span className="text-cyan-600 ">Comdata</span> 
                        </h2>

                        <p className="mt-4 text-gray-500 dark:text-gray-300 my-12">
                        simplifiant les tâches RH et les approbations des superviseurs pour une productivité accrue.
                        </p>

                        <div className="inline-flex w-full mt-6 sm:w-auto">
                            <a href="#login" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-cyan-800 rounded-lg hover:bg-cyan-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div>
                <span className="flex items-center">
                    <span className="h-px flex-1 bg-gray-600"></span>
                    <span className="shrink-0 px-6 text-gray-900">Login</span>
                    <span className="h-px flex-1 bg-gray-600"></span>
                </span>
            </div> */}
            <div className='dark:bg-gray-900 py-6'>
                <div className='font-semibold text-4xl text-center dark:text-gray-100'>
                    Vous êtes :
                </div>
                <div id='login' className='sm:flex gap-28 ml-10 mt-10 mb-4 md:mb-16'>
                    {userTypes.map((user, index) => {
                        return (

                            <div key={index} className="w-full max-w-xs text-center">
                                <Link to={user.link}>
                                    <div className="mt-2 relative">
                                        <h3 className="text-lg font-medium text-gray-800 md:text-gray-700 mb-3 dark:text-gray-200">{user.type}:</h3>
                                        <img className="object-cover object-center w-full h-48 mx-auto rounded-lg " src={user.image} alt="avatar" />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer className="bg-white dark:bg-gray-900 h-20 -mt-5 pt-3">
                <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                   
                        
                  

                    <p className="text-sm text-gray-600 dark:text-gray-300">&copy; Copyright {year}. All Rights Reserved.</p>


                </div>
            </footer>
        </>
    )
}

export default Start