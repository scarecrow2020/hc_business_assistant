package hc.config;

import hc.utils.CustomArgumentResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolverComposite;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;

@Configuration
public class FixedRequestMappingHandlerAdapter extends RequestMappingHandlerAdapter {
    @Override
    public void afterPropertiesSet() {
        try {
            Method initControllerAdviceCache = RequestMappingHandlerAdapter.class
                    .getDeclaredMethod("initControllerAdviceCache");
            Method getDefaultArgumentResolvers = RequestMappingHandlerAdapter.class
                    .getDeclaredMethod("getDefaultArgumentResolvers");
            Method getDefaultInitBinderArgumentResolvers = RequestMappingHandlerAdapter.class
                    .getDeclaredMethod("getDefaultInitBinderArgumentResolvers");
            Method getDefaultReturnValueHandlers = RequestMappingHandlerAdapter.class
                    .getDeclaredMethod("getDefaultReturnValueHandlers");

            initControllerAdviceCache.setAccessible(true);
            getDefaultArgumentResolvers.setAccessible(true);
            getDefaultInitBinderArgumentResolvers.setAccessible(true);
            getDefaultReturnValueHandlers.setAccessible(true);

            Field argumentResolvers = RequestMappingHandlerAdapter.class.getDeclaredField("argumentResolvers");
            Field initBinderArgumentResolvers = RequestMappingHandlerAdapter.class
                    .getDeclaredField("initBinderArgumentResolvers");
            Field returnValueHandlers = RequestMappingHandlerAdapter.class.getDeclaredField("returnValueHandlers");

            argumentResolvers.setAccessible(true);
            initBinderArgumentResolvers.setAccessible(true);
            returnValueHandlers.setAccessible(true);

            initControllerAdviceCache.invoke(this);

            if (argumentResolvers.get(this) == null) {
                List<HandlerMethodArgumentResolver> resolvers = (List<HandlerMethodArgumentResolver>) getDefaultArgumentResolvers
                        .invoke(this);
                resolvers.add(0, new CustomArgumentResolver());
                argumentResolvers.set(this, new HandlerMethodArgumentResolverComposite().addResolvers(resolvers));
            }
            if (initBinderArgumentResolvers.get(this) == null) {
                List<HandlerMethodArgumentResolver> resolvers = (List<HandlerMethodArgumentResolver>) getDefaultInitBinderArgumentResolvers
                        .invoke(this);
                initBinderArgumentResolvers.set(this,
                        new HandlerMethodArgumentResolverComposite().addResolvers(resolvers));
            }
            if (returnValueHandlers.get(this) == null) {
                List<HandlerMethodReturnValueHandler> handlers = (List<HandlerMethodReturnValueHandler>) getDefaultReturnValueHandlers
                        .invoke(this);
                returnValueHandlers.set(this, new HandlerMethodReturnValueHandlerComposite().addHandlers(handlers));
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
