import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define the validation schema for the form
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log('Form submitted with values:', values);
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you'd handle success or error responses here.
      // For example, resetting the form on success:
      // form.reset();
    }, 2000);
  };

  return (
    <Card className="w-96 shadow-lg border-0 rounded-md bg-card">
      <CardHeader className="items-center pt-8 pb-4">
        <CardTitle className="text-3xl font-bold text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-600">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="h-auto border-x-0 border-t-0 rounded-none border-b-2 border-gray-300 bg-transparent p-0 pb-1 text-base text-card-foreground shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-sm font-medium text-gray-600">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        className="h-auto border-x-0 border-t-0 rounded-none border-b-2 border-gray-300 bg-transparent p-0 pb-1 text-base text-card-foreground shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-start">
              <Button
                type="button"
                variant="link"
                className="h-auto p-0 text-sm font-normal text-primary hover:text-primary/80"
              >
                Forgot Password
              </Button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-base font-semibold h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>
        <div className="mt-8 text-center text-sm">
          <span className="text-card-foreground/80">
            Don't have an account?{" "}
          </span>
          <Button
            variant="link"
            className="h-auto p-0 text-primary font-semibold hover:text-primary/90"
          >
            SignUp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
