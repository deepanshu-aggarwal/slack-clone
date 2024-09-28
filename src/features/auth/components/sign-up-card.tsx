import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SignInFlow } from '../types'

interface SignUpCardProps {
  setState: (state: SignInFlow) => void
}

const SignUpCard = ({ setState }: SignUpCardProps) => {

  const [data, setData] = useState<{ email: any, password: any, confirmPassword: any }>({
    email: "", password: "", confirmPassword: ""
  })

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const _handleSignInClick = () => setState("signIn")

  return (
    <Card className='w-full h-full p-8'>
      <CardHeader className='px-0 pt-0'>
        <CardTitle>
          Sign up to continue
        </CardTitle>
        <CardDescription>Use your email or other service to continue</CardDescription>
      </CardHeader>
      <CardContent className='space-y-5 px-0 pb-0'>
        <form className='space-y-2.5'>
          <Input
            disabled={false}
            name='email'
            value={data.email}
            onChange={_handleChange}
            placeholder='Email'
            type='email'
            required
          />
          <Input
            disabled={false}
            name='password'
            value={data.password}
            onChange={_handleChange}
            placeholder='Password'
            type='password'
            required
          />
          <Input
            disabled={false}
            name='confirmPassword'
            value={data.confirmPassword}
            onChange={_handleChange}
            placeholder='Confirm password'
            type='password'
            required
          />
          <Button type='submit' className='w-full' size='lg' disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className='flex flex-col gap-y-2.5'>
          <Button
            disabled={false}
            onClick={() => { }}
            variant='outline'
            size='lg'
            className='w-full relative'
          >
            <FcGoogle className='size-5 absolute left-2.5' />
            Contine with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => { }}
            variant='outline'
            size='lg'
            className='w-full relative'
          >
            <FaGithub className='size-5 absolute left-2.5' />
            Contine with Github
          </Button>
        </div>
        <p className='text-xs text-muted-foreground'>
          Already have an account?{" "}
          <span className='text-sky-700 hover:underline cursor-pointer' onClick={_handleSignInClick}>
            Sign in
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

export default SignUpCard