'use client'

import { useActionState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { submitRequestAccess, type RequestAccessState } from '@/app/actions/request-access'
import { toast } from 'sonner'

const requestAccessFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companySize: z.string().min(1, 'Please select company size'),
  useCase: z.string().min(10, 'Please describe your use case (minimum 10 characters)'),
})

type RequestAccessFormData = z.infer<typeof requestAccessFormSchema>

const initialState: RequestAccessState = {
  success: undefined,
  message: undefined,
  errors: undefined,
}

export function RequestAccessForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequestAccess,
    initialState
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<RequestAccessFormData>({
    resolver: zodResolver(requestAccessFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      jobTitle: '',
      companySize: '',
      useCase: '',
    },
  })

  // Handle server action response
  useEffect(() => {
    if (state.success === true) {
      toast.success(state.message || 'Request submitted successfully!')
      reset()
    } else if (state.success === false && state.message) {
      toast.error(state.message)
    }
  }, [state, reset])

  const onSubmit = async (data: RequestAccessFormData) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('company', data.company)
    formData.append('jobTitle', data.jobTitle)
    formData.append('companySize', data.companySize)
    formData.append('useCase', data.useCase)

    formAction(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.name && (
          <p className="text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Work Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          Company Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="company"
          placeholder="Your Company"
          {...register('company')}
          aria-invalid={errors.company ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.company && (
          <p className="text-sm text-destructive" role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">
          Your Role <span className="text-destructive">*</span>
        </Label>
        <Controller
          name="jobTitle"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={isPending}
            >
              <SelectTrigger id="jobTitle" aria-invalid={errors.jobTitle ? 'true' : 'false'}>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Researcher">Researcher</SelectItem>
                <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                <SelectItem value="Developer">Developer</SelectItem>
                <SelectItem value="Product Manager">Product Manager</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.jobTitle && (
          <p className="text-sm text-destructive" role="alert">
            {errors.jobTitle.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="companySize">
          Team Size <span className="text-destructive">*</span>
        </Label>
        <Controller
          name="companySize"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={isPending}
            >
              <SelectTrigger id="companySize" aria-invalid={errors.companySize ? 'true' : 'false'}>
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Just me</SelectItem>
                <SelectItem value="2-5">2-5 people</SelectItem>
                <SelectItem value="6-10">6-10 people</SelectItem>
                <SelectItem value="11-50">11-50 people</SelectItem>
                <SelectItem value="50+">50+ people</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.companySize && (
          <p className="text-sm text-destructive" role="alert">
            {errors.companySize.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="useCase">
          How do you plan to use our platform? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="useCase"
          placeholder="Tell us about your use case and requirements"
          rows={4}
          {...register('useCase')}
          aria-invalid={errors.useCase ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.useCase && (
          <p className="text-sm text-destructive" role="alert">
            {errors.useCase.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit Request'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{' '}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
